'use client';
import { useState } from 'react';

// images
// import logo from '../logo.jpg';

// components
import { PokemonCard } from './pokemon-card';

// Radix icons
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';

interface PokemonGridProps {
  pokemonList: any;
}

// Component to render card component x Pokemon
export function PokemonGrid({ pokemonList }: PokemonGridProps) {
  const [searchText, setSearchText] = useState('');
  //   console.log(pokemonList);
  const searchFilter = (pokemonList: any) => {
    return pokemonList.filter((pokemon: any) =>
      pokemon.name.toLowerCase().includes(searchText.toLowerCase())
    );
  };

  // save the filtered array of objects
  const filteredPokemonList = searchFilter(pokemonList);

  return (
    <div className="flex flex-col justify-between">
      <div className="flex flex-wrap flex-row">
        <div className="w-1/2">
          <h1 className="flex flex-start py-6 text-xl font-bold text-slate-800">
            Pokemon Collection
          </h1>
        </div>
        <div className="w-1/2 flex justify-end self-center">
          <form>
            <label className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3">
                <MagnifyingGlassIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              </div>
              <input
                type="text"
                className="block max-w-40 p-4 ps-10 text-sm text-slate-300 border border-gray-600 rounded-lg bg-gray-700 focus:ring-yellow-400 focus:border-yellow-400"
                value={searchText}
                autoComplete="off"
                id="pokemonName"
                placeholder="Charizard, Pikachu, etc."
                onChange={(e) => setSearchText(e.target.value)}
              />
            </div>
          </form>
        </div>
      </div>
      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left gap-6">
        {filteredPokemonList.map((pokemon: any) => {
          return <PokemonCard name={pokemon.name} key={pokemon.name + 'Card'} />;
        })}
      </div>
    </div>
  );
}
