import { cinemaApi } from '@/lib/api';
import { Movie } from '@/types/movie.type';

export const getMoviesService = async (tenant: string) => {
  const { data } = await cinemaApi(tenant).get<Movie[]>('/movies');
  return data;
};
