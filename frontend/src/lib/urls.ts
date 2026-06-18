import axios from 'axios';

export const apiInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3001',
});

export const cinemaInstance = (cinemaId: number) =>
  axios.create({
    baseURL: `${apiInstance.defaults.baseURL}/cinemas/${cinemaId}`,
  });

export const urls = {
  cinema: (cinemaId: number) => `/cinema/${cinemaId}`,
  repertoire: (cinemaId: number) => `/cinema/${cinemaId}/repertoire`,
  pricing: (cinemaId: number) => `/cinema/${cinemaId}/pricing`,
  comingSoon: (cinemaId: number) => `/cinema/${cinemaId}/coming-soon`,
  about: (cinemaId: number) => `/cinema/${cinemaId}/about`,
  contact: (cinemaId: number) => `/cinema/${cinemaId}/contact`,
  movie: (cinemaId: number, movieId: number) =>
    `/cinema/${cinemaId}/movie/${movieId}`,
};
