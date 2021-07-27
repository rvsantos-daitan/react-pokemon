import { IPokemonFragment } from "../../interfaces/pokemon.model";

export default function toggleFavoritePokemon(pokemon: IPokemonFragment) {
    return {
        type: "pokemon/toggleFavorite",
        pokemon,
    }
}