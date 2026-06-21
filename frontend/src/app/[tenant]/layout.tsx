import type { Metadata } from 'next';
import { ReactNode } from 'react';
import { url } from '@/lib/api';
import Navbar from '@/components/ui/Navbar';

export const metadata: Metadata = {
  title: 'Kino',
  description: 'Opis',
};

type Props = {
  params: Promise<{ tenant: string }>;
};

export default async function UserLayout({
  children,
  params,
}: { children: ReactNode } & Props) {
  const { tenant } = await params;

  return (
    <div className="h-full bg-red-900 text-white">
      <div className="mx-auto flex h-20 max-w-7xl justify-center">
        <Navbar
          logo={'/logo.svg'}
          logoAlt="Cinema logo"
          items={[
            { label: 'Repertuar', href: url.repertoire(tenant) },
            { label: 'Wkrótce', href: url.comingSoon(tenant) },
            { label: 'Cennik', href: url.pricing(tenant) },
            { label: 'O kinie', href: url.about(tenant) },
            { label: 'Kontakt', href: url.contact(tenant) },
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
