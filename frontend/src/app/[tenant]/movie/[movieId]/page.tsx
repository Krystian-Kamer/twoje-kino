import { getMovieService } from '@/services/public/movies/get-movie.service';
import { TenantMovieParams } from '@/types/params/tenant-params.types';

const MoviePage = async ({ params }: TenantMovieParams) => {
  const { tenant, movieId } = await params;
  const movie = await getMovieService(tenant, movieId);

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <p>{movie.duration} min</p>
    </div>
  );
};

export default MoviePage;
