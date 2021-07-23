
export default function toggleFavoritePokemon(pokemonName: string) {
    return {
        type: "pokemon/favoritePokemon",
        pokemonName,
    }
}