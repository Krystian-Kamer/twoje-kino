import { cinemaInstance, urls } from '@/lib/urls';
import Link from 'next/link';
import Image from 'next/image';
import { Movie } from '@/types/movie.type';

type RepertoirePageProps = {
  params: Promise<{ cinemaId: string }>;
};

const RepertoirePage = async ({ params }: RepertoirePageProps) => {
  const { cinemaId } = await params;
  const { data: movies } = await cinemaInstance(Number(cinemaId)).get<Movie[]>(
    '/movies',
  );

  return (
    <div className="flex gap-4">
      {movies.map((movie) => (
        <Link
          key={movie.id}
          className="w-fit bg-red-500!"
          href={urls.movie(Number(cinemaId), movie.id)}
        >
          <Image
            src={movie.thumbnailUrl}
            alt={movie.title}
            width={300}
            height={200}
          />
          <h2>{movie.title}</h2>
        </Link>
      ))}
    </div>
  );
};

export default RepertoirePage;
