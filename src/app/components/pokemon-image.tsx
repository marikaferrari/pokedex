'use client';
import Image from 'next/image';
import { useState } from 'react';

export function PokemonImage({ image, name }: { image: string; name: string }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <Image
      src={image}
      alt={`Picture of ${name}`}
      priority
      fill
      style={{ objectFit: 'contain' }}
      className={`transition-opacity duration-[2s] ${loaded ? 'opacity-100' : 'opacity-0'}`}
      onLoadingComplete={() => setLoaded(true)}
    />
  );
}
