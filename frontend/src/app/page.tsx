import { Typography } from '@/components/ui/typography';
import Link from 'next/link';
import { apiInstance, urls } from '@/lib/urls';

type Cinema = {
  id: number;
  name: string;
  description: string;
};

const Homepage = async () => {
  const { data: cinemas } = await apiInstance.get<Cinema[]>('/cinemas');

  return (
    <div className="h-full bg-blue-950 text-white">
      <nav className="flex h-20 items-center bg-black px-10 text-white">
        <div className="mx-auto flex w-full max-w-7xl items-center gap-x-2 px-4">
          <p className="text-3xl">🎬</p>
          <p className="text-2xl">To teraz Twoje Kino. Zrób je po swojemu.</p>
        </div>
      </nav>
      <main className="mx-auto my-20 max-w-7xl px-10">
        <Typography variant="h2">Wybierz dostępne kina</Typography>

        {cinemas.length === 0 ? (
          <div>Brak kin do wyświetlenia</div>
        ) : (
          <div className="flex flex-col gap-y-2">
            {cinemas.map((cinema) => (
              <Link
                key={cinema.id}
                className="w-fit capitalize"
                href={urls.cinema(cinema.id)}
              >
                {cinema.name}
              </Link>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Homepage;
