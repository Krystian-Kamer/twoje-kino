import { getCinemaService } from '@/services/public/cinemas/get-cinema.service';
import { TenantParams } from '@/types/params/tenant-params.types';

const AboutCinemaPage = async ({ params }: TenantParams) => {
  const { tenant } = await params;
  const cinema = await getCinemaService(tenant);

  return <div>{cinema.description}</div>;
};

export default AboutCinemaPage;
