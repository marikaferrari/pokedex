// Fetch data from API
import { getPokemon } from '../lib/pokemonAPI';

// components
import { PokemonImage } from '../components/pokemon-image';

// Radix components
import { Progress } from '@radix-ui/react-progress';

export default async function PokemonPage({ params }: { params: { pokemonName: string } }) {
  // Object destructuring
  const { pokemonName } = params;
  // pikachu
  // get the API data for pikachu
  const pokemonObject = await getPokemon(pokemonName);

  console.log(pokemonObject);

  return (
    <>
      <h1 className="text-4xl text-bold pt-4">
        {pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}
      </h1>
      <div className="m-4" style={{ position: 'relative', width: '300px', height: '300px' }}>
        <PokemonImage
          image={pokemonObject.sprites.other['official-artwork'].front_default}
          name={pokemonName}
        />
      </div>
      <h3>Weight: {pokemonObject.weight}</h3>
      <div className="flex-col">
        {pokemonObject.stats.map((statObject: any) => {
          const statName = statObject.stat.name;
          const statValue = statObject.base_stat;

          return (
            <div className="flex items-stretch" style={{ width: '500px' }} key={statName}>
              <h3 className="p-3 w-2/4">
                {statName}: {statValue}
              </h3>
              <Progress className="w-2/4 m-auto" value={statValue} />
            </div>
          );
        })}
      </div>
    </>
  );
}
