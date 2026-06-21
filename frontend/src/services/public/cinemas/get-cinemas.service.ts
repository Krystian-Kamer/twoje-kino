import { apiInstance } from '@/lib/api';
import { Cinema } from '@/types/cinema.type';

export const getCinemasService = async (): Promise<Cinema[]> => {
  const { data } = await apiInstance.get<Cinema[]>('/cinemas');
  return data;
};
