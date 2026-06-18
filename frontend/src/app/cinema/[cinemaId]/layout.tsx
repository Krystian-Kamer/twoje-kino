import type { Metadata } from 'next';
import { ReactNode } from 'react';
import { urls } from '@/lib/urls';
import Navbar from '@/components/ui/Navbar';

export const metadata: Metadata = {
  title: 'Kino',
  description: 'Opis',
};

type Props = {
  params: Promise<{ cinemaId: string }>;
};

export default async function UserLayout({
  children,
  params,
}: { children: ReactNode } & Props) {
  const { cinemaId } = await params;

  return (
    <div className="h-full bg-red-900 text-white">
      <div className="mx-auto flex h-20 max-w-7xl justify-center">
        <Navbar
          logo={'/logo.svg'}
          logoAlt="Cinema logo"
          items={[
            { label: 'Repertuar', href: urls.repertoire(Number(cinemaId)) },
            { label: 'Wkrótce', href: urls.comingSoon(Number(cinemaId)) },
            { label: 'Cennik', href: urls.pricing(Number(cinemaId)) },
            { label: 'O kinie', href: urls.about(Number(cinemaId)) },
            { label: 'Kontakt', href: urls.contact(Number(cinemaId)) },
          ]}
          activeHref="/"
          className="custom-nav"
          ease="power2.easeOut"
          baseColor="#000000"
          pillColor="#ffffff"
          hoveredPillTextColor="#ffffff"
          pillTextColor="#000000"
          initialLoadAnimation={false}
        />
      </div>
      <main className="mx-auto max-w-7xl px-4">{children}</main>
    </div>
  );
}
