// API function
import { getPokemonList } from './lib/pokemonAPI';

// components
import { PokemonGrid } from './components/pokemon-grid';

export default async function Home() {
  // Load in data for every Pokemon
  const pokemonList = await getPokemonList(151);

  return <PokemonGrid pokemonList={pokemonList} />;
}
