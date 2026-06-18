import { apiInstance } from '@/lib/urls';
import { Cinema } from '@/types/cinema.type';

type AboutCinemaPageProps = {
  params: Promise<{ cinemaId: string }>;
};

const AboutCinemaPage = async ({ params }: AboutCinemaPageProps) => {
  const { cinemaId } = await params;
  const { data: cinema } = await apiInstance.get<Cinema>(
    `/cinemas/${cinemaId}`,
  );

  return <div>{cinema.description}</div>;
};

export default AboutCinemaPage;
