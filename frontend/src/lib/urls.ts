import axios from 'axios';

export const apiInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3001',
});

export const urls = {
  cinema: (name: string) => `/${name}`,
  repertoire: (name: string) => `/${name}/repertoire`,
  pricing: (name: string) => `/${name}/pricing`,
  comingSoon: (name: string) => `/${name}/coming-soon`,
  about: (name: string) => `/${name}/about`,
  contact: (name: string) => `/${name}/contact`,
};
