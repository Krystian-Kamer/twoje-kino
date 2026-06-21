import { apiInstance } from '@/lib/api';
import { Cinema } from '@/types/cinema.type';

export const getCinemaService = async (tenant: string): Promise<Cinema> => {
  const { data } = await apiInstance.get<Cinema>(`/cinemas/${tenant}`);
  return data;
};
