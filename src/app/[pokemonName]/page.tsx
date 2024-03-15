// Fetch data from API
import { getPokemon } from '../lib/pokemonAPI';

// components
import { PokemonImage } from '../components/pokemon-image';

// Shadcn/ui components
import { Progress } from '@/app/components/ui/progress';

export default async function PokemonPage({ params }: { params: { pokemonName: string } }) {
  // Object destructuring
  const { pokemonName } = params;

  // get the API data x PK's name
  const pokemonObject = await getPokemon(pokemonName);

  console.log(pokemonObject);

  return (
    <div className="flex flex-wrap justify-evenly items-center flex-col min-h-screen">
      <h1 className="text-left text-4xl font-bold text-slate-900">
        {pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}
      </h1>
      <div
        className="flex flex-wrap lg:flex-row md:flex-col items-center justify-evenly gap-20 border border-slate-800 rounded-lg p-10 bg-cover bg-center"
        style={{
          backgroundImage: `url("https://i.pinimg.com/originals/62/24/7f/62247f857425ed3f71abfaffd77605af.jpg")`,
        }}
      >
        <div className="relative justify-center w-72 h-72 pr-10">
          <PokemonImage
            image={pokemonObject.sprites.other['official-artwork'].front_default}
            name={pokemonName}
          />
        </div>
        <div className="flex-col">
          <h3 className="ml-3 mb-4 text-slate-200 font-bold">Weight: {pokemonObject.weight}</h3>
          {pokemonObject.stats.map((statObject: any) => {
            const statName = statObject.stat.name;
            const statValue = statObject.base_stat;

            return (
              <div
                className="flex items-stretch text-slate-200 font-bold"
                style={{ width: '500px' }}
                key={statName}
              >
                <h3 className="p-3 w-2/4">
                  {statName.charAt(0).toUpperCase() + statName.slice(1)}: {statValue}
                </h3>
                <Progress
                  className="w-2/4 m-auto bg-amber-500 border border-slate-700"
                  value={statValue}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
