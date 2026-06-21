import { cinemaApi } from '@/lib/api';
import { Movie } from '@/types/movie.type';

export const getMovieService = async (
  tenant: string,
  movieId: string,
): Promise<Movie> => {
  const { data } = await cinemaApi(tenant).get<Movie>(`/movies/${movieId}`);
  return data;
};
