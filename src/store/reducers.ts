import IFilter from "../interfaces/filter.model";
import IGenericInterface from "../interfaces/generic.model";

const initialState = {
  results: [],
  offset: 0,
  limit: 20,
  pokemonList: [],
  types: [],
  hasFetchedData: false
};

const initialFavoriteState = {
  favoritePokemon: []
}

const initialFilterState: IFilter = {
  types: [],
  minWeight: 0,
  maxWeight: 0
}

export const favoriteReducer = (state = initialFavoriteState, action) => {
  if (action.type === "pokemon/favoritePokemon") {
    const { favoritePokemon } = state;
    const { pokemonName } = action;

    let updatedList: Array<IGenericInterface>;
    if (favoritePokemon.includes(pokemonName)) {
      updatedList = favoritePokemon.filter(pokemon => pokemon !== pokemonName);
    } else {
      updatedList = [...favoritePokemon, pokemonName];
    }
    return { ...state, favoritePokemon: updatedList }
  }
  return state;
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
