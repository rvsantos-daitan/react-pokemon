import { StoreState } from "..";
import { createSelector } from "@reduxjs/toolkit";
import { selectByPokemonType, selectMaxWeight, selectMinWeight } from "./functions/filterselectorfunctions";

export const unorderedPokemonList = (state: StoreState) => state.initialData.pokemonList;

const filters = (state: StoreState) => state.filterState;

export const selectPokemon = createSelector([unorderedPokemonList, filters],
    (unorderedPokemonList, filters) => {
        const { minWeight, maxWeight, types } = filters;
        let pokemonList = unorderedPokemonList;

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