"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getEdicionActual } from '../../data/festival';

export default function FestivalHome() {
  const router = useRouter();

  useEffect(() => {
    const edicionActual = getEdicionActual();
    if (edicionActual) {
      router.replace(`/festival/${edicionActual.ano}`);
    } else {
      router.replace('/festival/archivo');
    }
  }, [router]);

  return (
    <div className="bg-bgDark min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-accent mx-auto mb-4"></div>
        <p className="text-textLight font-montserrat">Cargando festival...</p>
      </div>
    </div>
  );
}
