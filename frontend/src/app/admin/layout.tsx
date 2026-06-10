import { ReactNode } from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kino',
  description: 'Opis',
};

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <nav className="flex h-20 items-center bg-black text-white">
        <div className="mx-auto flex w-full max-w-7xl items-center gap-x-2 px-4">
          <p className="text-3xl">🎬</p>
          <p className="text-2xl">Admin.</p>
        </div>
      </nav>
      <main className="mx-auto max-w-7xl px-4">{children}</main>
    </>
  );
}
