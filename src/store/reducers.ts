import IFilter from "../interfaces/filter.model";
import { IPokemon, IPokemonFragment, IType } from "../interfaces/pokemon.model";


interface IPokemonState {
  results: IPokemon[],
  offset: number,
  limit: number,
  pokemonList: IPokemonFragment[],
  types: IType[],
  hasFetchedData: boolean
}

interface IHighlightedPokemonState {
  highlightedPokemon: IPokemonFragment
}

const initialState: IPokemonState = {
  results: [],
  offset: 0,
  limit: 20,
  pokemonList: [],
  types: [],
  hasFetchedData: false
};


const initialFilterState: IFilter = {
  types: [],
  minWeight: 0,
  maxWeight: 0
}

const initialPokemonSelection: IHighlightedPokemonState = {
  highlightedPokemon: null
}

export const dataReducer = (state = initialState, action) => {
  if (action.type === "pokemon/fetchUnitData") {
    const { pokemon } = action;
    return { ...state, hasFetchedData: true, pokemonList: [...state.pokemonList, pokemon].sort((a, b) => a.id - b.id) }
  }

  if (action.type === "pokemon/fetchTypes") {
    const { types } = action;
    return { ...state, types: [...types] };
  }

  if (action.type === "pokemon/toggleFavorite") {
    const { pokemonList } = state;

    return {
      ...state,
      pokemonList: pokemonList
        .map(pokemon => pokemon.id === action.pokemon.id ?
          { ...pokemon, isFavorite: !action.pokemon.isFavorite }
          : pokemon)
    }
  }
  return state;
}

export const filterReducer = (state = initialFilterState, action) => {
  if (action.type === "filter/addfilter") {
    if (action.filters.types?.length > 0) {
      return { ...state, types: [...state.types, ...action.filters.types] }
    }
    return { ...state, ...action.filters }
  }

  if (action.type === "filter/removefilter") {
    const { filterName, filterValue } = action;
    const newStateValue = state[filterName].filter((value: string) => value !== filterValue);
    const newState = { ...state }
    newState[filterName] = newStateValue;
    return newState;
  }

  if (action.type === "filter/clearFilter") {
    return { ...initialFilterState }
  }

  return state;
}

export const highlightedPokemonReducer = (state = initialPokemonSelection, action) => {
  if (action.type === "pokemon/select") {
    try {
      const { highlightedPokemon } = state;
      if (!highlightedPokemon || highlightedPokemon.id !== action.highlightedPokemon.id) {
        return { ...state, highlightedPokemon: action.highlightedPokemon }
      }
    } catch (err) {
      console.error(err);
      return state;
    }
  }

  return state;
}
