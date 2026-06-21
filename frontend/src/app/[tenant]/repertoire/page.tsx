import { url } from '@/lib/api';
import { getMoviesService } from '@/services/public/movies/get-movies.service';
import Link from 'next/link';
import Image from 'next/image';
import { TenantParams } from '@/types/params/tenant-params.types';

const RepertoirePage = async ({ params }: TenantParams) => {
  const { tenant } = await params;
  const movies = await getMoviesService(tenant);

  return (
    <div className="flex gap-4">
      {movies.map((movie) => (
        <Link
          key={movie.id}
          className="w-fit"
          href={url.movie(tenant, movie.id)}
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
