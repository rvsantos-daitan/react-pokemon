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
