// API function
import { getPokemonList } from './lib/pokemonAPI';

// components
import PokemonGrid from './components/pokemon-grid';

export default async function Home() {
  // Load in data.
  const pokemonList = await getPokemonList();

  return <PokemonGrid pokemonList={pokemonList} />;
}
