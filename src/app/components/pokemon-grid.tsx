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
  }, [currentPage]);

  return (
    <Suspense fallback={<Loading />}>
      <div className="flex flex-col min-h-screen w-full gap-6 md:gap-0">
        <div className="flex flex-wrap sm:flex-col px-4 sm:px-6 lg:px-8 lg:flex-row">
          <div className="w-full lg:w-1/2 py-6">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-800 lg:text-left text-center">
              Pokemon Collection
            </h1>
          </div>
          <div className="w-full flex justify-center lg:justify-end lg:w-1/2 self-center">
            <form className="w-lg sm:max-w-xs">
              <label className="sr-only">Search</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <MagnifyingGlassIcon className="w-5 h-5 text-gray-500" />
                </div>
                <input
                  type="text"
                  className="block w-full p-2 pl-10 text-sm border rounded-lg bg-gray-700 text-slate-300"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  placeholder="Search"
                />
              </div>
            </form>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4 sm:px-6 lg:px-8 justify-items-center">
          {paginatedPokemonList.map((pokemon: any) => (
            <PokemonCard
              name={pokemon.name}
              pokemonImageURL={pokemon.spriteUrl}
              key={pokemon.name + 'Card'}
            />
          ))}
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
