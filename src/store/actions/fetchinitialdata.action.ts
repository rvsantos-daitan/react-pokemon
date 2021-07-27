import { IPokemonFragment, IType } from "../../interfaces/pokemon.model";


export const fetchUnitData = (pokemon: IPokemonFragment) => (
    {
        type: "pokemon/fetchUnitData",
        pokemon
    }
);

export const fetchTypesData = (types: IType[]) => (
    {
        type: "pokemon/fetchTypes",
        types
    }
);

const fetchPokemonData = async () => {
    const response = await fetch(process.env.REACT_APP_POKEMON_BASE_URL);
    const data = await response.json();
    const { results } = data;
    return results;
}

const fetchPokemonTypeData = async () => {
    const response = await fetch(process.env.REACT_APP_TYPE_URL);
    const data = await response.json();
    const { results } = data;
    return results;
}

export const fetchInital = () =>
    async (dispatch, getState) => {
        const hasFetchedData = getState().initialData.hasFetchedData;
        if (hasFetchedData) return;
        try {
            const pokemon = await fetchPokemonData();
            const types = await fetchPokemonTypeData();

            pokemon.forEach((result) => {
                dispatch(unitFetch(result.url))
            });

            dispatch(fetchTypesData(types));
        } catch (err) {
            console.log(process.env.REACT_APP_BASE_URL)
            console.log("fetch inicial", err)
        }
    }


const unitFetch = (url: string) =>
    async (dispatch) => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            const { id, sprites, name, abilities, types, forms, weight } = data;

            dispatch(fetchUnitData({ id, sprites, name, abilities, types, forms, weight, isFavorite: false }));
        } catch (err) {
            console.log("fetch unitario", err)
        }
    }
