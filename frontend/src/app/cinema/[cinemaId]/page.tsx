type CinemaMainPageProps = {
  params: Promise<{ cinemaId: string }>;
};

const CinemaMainPage = async ({ params }: CinemaMainPageProps) => {
  const { cinemaId } = await params;

  return <div>Strona główna kina {cinemaId}</div>;
};

export default CinemaMainPage;
