import Link from 'next/link';

// import logo from '../logo.jpg';

// components
import { PokemonImage } from './pokemon-image';

interface PokemonCardProps {
  pokemonImageURL: string;
  name: string;
}

export default function PokemonCard({ pokemonImageURL, name }: PokemonCardProps) {
  // console.log(pokemonImageURL);
  return (
    <div className="w-60 rounded-lg shadow bg-gray-900">
      <div className="flex flex-col items-center py-8">
        <div className="m-4" style={{ position: 'relative', width: '100px', height: '100px' }}>
          <PokemonImage image={pokemonImageURL} name={name} />
        </div>
        {/* Capitalize Pokemon's names */}
        <h2 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </h2>
        <div className="flex mt-4 md:mt-6">
          <Link
            href={name}
            className="inline-flex items-center px-4 py-2 text-sm text-center text-slate-900 font-bold bg-amber-500 rounded-lg"
            key={name + 'Card'}
          >
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
}
