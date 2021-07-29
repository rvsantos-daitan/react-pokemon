import { IPokemonFragment } from "../../interfaces/pokemon.model";

export const setHighlightedPokemon = (highlightedPokemon: IPokemonFragment) => (
    {
        type: "pokemon/select",
        highlightedPokemon
    }
);
