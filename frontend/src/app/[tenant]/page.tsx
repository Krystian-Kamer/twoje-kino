import { getCinemaService } from '@/services/public/cinemas/get-cinema.service';
import { TenantParams } from '@/types/params/tenant-params.types';

const CinemaMainPage = async ({ params }: TenantParams) => {
  const { tenant } = await params;
  const cinema = await getCinemaService(tenant);

  return <div>Strona główna kina {cinema.name}</div>;
};

export default CinemaMainPage;
