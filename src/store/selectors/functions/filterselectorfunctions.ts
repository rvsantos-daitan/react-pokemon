import { IPokemonFragment } from "../../../interfaces/pokemon.model";

export const selectMinWeight = (minWeight: number, pokemonList: IPokemonFragment[]) => pokemonList.filter((pokemon) => pokemon.weight >= minWeight);

export const selectMaxWeight = (maxWeight: number, pokemonList: IPokemonFragment[]) => pokemonList.filter(pokemon => pokemon.weight <= maxWeight);

export const selectByPokemonType = (types: string[], pokemonList: IPokemonFragment[]) => {
    const pokemonByType = pokemonList.filter(pokemon => (
        pokemon.types.some(({ type }) => (types.includes(type.name)))));
    return pokemonByType;
};
