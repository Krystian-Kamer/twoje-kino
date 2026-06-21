import axios from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3001';

export const apiInstance = axios.create({ baseURL: BASE_URL });

export const cinemaApi = (tenant: string) =>
  axios.create({ baseURL: `${BASE_URL}/cinemas/${tenant}` });

export const url = {
  cinema: (tenant: string) => `/${tenant}`,
  repertoire: (tenant: string) => `/${tenant}/repertoire`,
  pricing: (tenant: string) => `/${tenant}/pricing`,
  comingSoon: (tenant: string) => `/${tenant}/coming-soon`,
  about: (tenant: string) => `/${tenant}/about`,
  contact: (tenant: string) => `/${tenant}/contact`,
  movie: (tenant: string, movieId: number) => `/${tenant}/movie/${movieId}`,
};
