import { createSelector } from "@reduxjs/toolkit";
import { StoreState } from "..";
import { selectByPokemonType, selectMaxWeight, selectMinWeight } from "./functions/filterselectorfunctions";

export const unorderedPokemonList = (state: StoreState) => state.initialData.pokemonList;

export const favoritePokemon = (state: StoreState) => state.favoritePokemon.favoritePokemon;

const filters = (state: StoreState) => state.filterState;

export const selectPokemon = createSelector([unorderedPokemonList, favoritePokemon, filters],
    (unorderedPokemonList, favoritePokemon, filters) => {
        const { minWeight, maxWeight, types } = filters;
        let pokemonList = unorderedPokemonList;

        if (favoritePokemon.length > 0) return favoritePokemon;

        if (minWeight) {
            pokemonList = selectMinWeight(minWeight, pokemonList);
        }

        if (maxWeight) {
            pokemonList = selectMaxWeight(maxWeight, pokemonList);
        }

        if (types.length > 0) {
            pokemonList = selectByPokemonType(types, pokemonList);
        }

        return pokemonList;
    }
);