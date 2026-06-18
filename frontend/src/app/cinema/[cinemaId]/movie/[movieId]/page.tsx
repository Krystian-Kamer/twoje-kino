import { cinemaInstance } from '@/lib/urls';
import { Movie } from '@/types/movie.type';

type MoviePageProps = {
  params: Promise<{ cinemaId: string; movieId: string }>;
};

const MoviePage = async ({ params }: MoviePageProps) => {
  const { cinemaId, movieId } = await params;
  const { data: movie } = await cinemaInstance(Number(cinemaId)).get<Movie>(
    `/movies/${movieId}`,
  );

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <p>{movie.duration} min</p>
    </div>
  );
};

export default MoviePage;
