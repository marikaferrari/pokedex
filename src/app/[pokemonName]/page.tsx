import { Suspense } from 'react';

// Fetch data from API
import { getPokemon } from '../lib/pokemonAPI';

// components
import { PokemonImage } from '../components/pokemon-image';
import Loading from '../loading';

// Shadcn/ui components
import { Progress } from '@/app/components/ui/progress';

export default async function PokemonPage({ params }: { params: { pokemonName: string } }) {
  // Object destructuring
  const { pokemonName } = params;

  // get the API data x PK's name
  const pokemonObject = await getPokemon(pokemonName);

  // console.log(pokemonObject);

  return (
    <Suspense fallback={<Loading />}>
      <div className="flex flex-col justify-evenly items-center h-screen p-4">
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-5">
          {pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}
        </h1>
        {/* Card container */}
        <div
          className="flex flex-col md:flex-row items-center justify-evenly gap-4 md:gap-20 p-4 md:p-10 border border-slate-400 rounded-lg shadow-xl"
          style={{
            backgroundImage: `url("https://i.pinimg.com/originals/62/24/7f/62247f857425ed3f71abfaffd77605af.jpg")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="w-64 h-64 md:w-72 md:h-72 relative">
            <PokemonImage
              image={pokemonObject.sprites.other['official-artwork'].front_default}
              name={pokemonName}
            />
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-slate-200 font-bold mb-2 p-2">Weight: {pokemonObject.weight}</h3>
            {pokemonObject.stats.map((statObject: any) => {
              const statName = statObject.stat.name;
              const statValue = statObject.base_stat;

              return (
                <div
                  className="flex items-center text-slate-200 font-bold w-full sm:w-72 md:w-96 lg:w-500px my-2"
                  key={statName}
                >
                  <h3 className="p-2 text-sm md:text-base flex-1">
                    {statName.charAt(0).toUpperCase() + statName.slice(1)}: {statValue}
                  </h3>
                  <Progress
                    className="flex-1 bg-amber-500 border border-slate-700"
                    value={statValue}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Suspense>
  );
}
