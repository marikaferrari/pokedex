'use client';
import React, { Suspense, useState, useEffect } from 'react';

// images
// import logo from '../logo.jpg';

// components
// import { PokemonCard } from './pokemon-card';
import Loading from '../loading';
import { Pagination } from './pagination';

// Lazy loading using React.lazy
const PokemonCard = React.lazy(() => import('./pokemon-card'));

// Radix icons
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';

interface PokemonGridProps {
  pokemonList: any;
}

// Component to render card component x Pokemon
export function PokemonGrid({ pokemonList }: PokemonGridProps) {
  // State to allow search functionality
  const [searchText, setSearchText] = useState('');
  //   console.log(pokemonList);
  const searchFilter = (pokemonList: any) => {
    return pokemonList.filter((pokemon: any) =>
      pokemon.name.toLowerCase().includes(searchText.toLowerCase())
    );
  };

  // Save the filtered array of objects
  const filteredPokemonList = searchFilter(pokemonList);
  // console.log(filteredPokemonList);

  // State for pagination feature
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Calculate the slice of Pokémon to display based on the current page
  const paginatedPokemonList = filteredPokemonList.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Hook to jump to the top of the page when moving though pages
  useEffect(() => {
    // Scrolls to the top of the page smoothly
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [currentPage]); // This effect depends on `currentPage`

  return (
    <Suspense fallback={<Loading />}>
      <div className="flex flex-col justify-between min-h-screen">
        <div className="flex flex-wrap flex-row">
          <div className="w-1/2">
            <h1 className="flex flex-start py-6 text-3xl font-bold text-slate-800">
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
                  className="block max-w-40 p-4 ps-10 text-sm text-slate-300 border rounded-lg bg-gray-700"
                  value={searchText}
                  autoComplete="off"
                  id="pokemonName"
                  placeholder="Search"
                  onChange={(e) => setSearchText(e.target.value)}
                />
              </div>
            </form>
          </div>
        </div>
        <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left gap-6">
          {paginatedPokemonList.map((pokemon: any) => {
            return (
              <PokemonCard
                name={pokemon.name}
                pokemonImageURL={pokemon.spriteUrl}
                key={pokemon.name + 'Card'}
              />
            );
          })}
        </div>
        <Pagination
          totalItems={filteredPokemonList.length}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </div>
    </Suspense>
  );
}
