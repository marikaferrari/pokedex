const POKEMON_API = 'https://pokeapi.co/api/v2/';

// Retrieve the first, original 151 Pokemon
export async function getPokemonList(
  limit: number
): Promise<Array<{ name: string; spriteUrl: string }>> {
  const pokemonListUrl = `https://pokeapi.co/api/v2/pokemon?limit=${limit}`;

  // Fetch the list of Pokemon
  const listResponse = await fetch(pokemonListUrl);
  const listData = await listResponse.json();

  // Fetch details for each Pokemon to get sprites as well
  const pokemonDetailsPromises = listData.results.map(async (pokemon: any) => {
    const detailResponse = await fetch(pokemon.url);
    const detailData = await detailResponse.json();
    // console.log('Detail data:', detailData);
    return {
      name: pokemon.name,
      spriteUrl: detailData.sprites.other['official-artwork'].front_default,
    };
  });

  // Variable to limit concurrent requests to avoid overloading the server
  const pokemonWithSprites = await Promise.all(pokemonDetailsPromises);

  return pokemonWithSprites;
}

// Retrieve specific information
export async function getPokemon(name: string) {
  // pokemon/ditto
  const response = await fetch(POKEMON_API + 'pokemon/' + name);
  const data = await response.json();
  return data;
}
