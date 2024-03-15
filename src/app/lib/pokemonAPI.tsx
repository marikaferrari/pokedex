const POKEMON_API = 'https://pokeapi.co/api/v2/';

// Retrieve the first, original 151 Pokemon
export async function getPokemonList() {
  const response = await fetch(POKEMON_API + 'pokemon?limit=151&offset=0');
  const data = await response.json();
  return data.results;
}

// Retrieve specific information
export async function getPokemon(name: string) {
  // pokemon/ditto
  const response = await fetch(POKEMON_API + 'pokemon/' + name);
  const data = await response.json();
  return data;
}
