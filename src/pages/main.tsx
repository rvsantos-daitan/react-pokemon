import { useDispatch, useSelector } from "react-redux";
import Dashboard from "../containers/dashboard/dashboard"
import FavoriteList from "../components/favoritelist/favoriteslist";
import { Navbar } from "../components/header/navbar";
import Sidebar from "../components/sidebar/sidebar"
import { StoreState } from "../store";
import { FlexContainer } from "../global/generics/flexcontainer/flexcontainer";
import { fetchInital } from "../store/actions/fetchinitialdata";
import { useEffect, useState } from "react";
import PokemonFilter from "../containers/filters/pokemonFilter";
import { IPokemonFragment, IType } from "../interfaces/pokemon.model";

const Main: React.FC = () => {
    const [types, setTypes] = useState([]);
    const [minWeight, setMinWeight] = useState(null);
    const [maxWeight, setMaxWeight] = useState(null);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchInital())
    }, [])

    const pokemonSelector = (state: StoreState) => {
        let pokemonList = state.initialData.pokemonList;
        if (types.length > 0) {
            pokemonList = pokemonList.filter(pokemon => (
                pokemon.types.some(({ type }) => (types.includes(type.name)))
            ));
        }

        if (minWeight) {
            pokemonList = pokemonList.filter(pokemon => pokemon.weight > minWeight);
        }

        if (maxWeight) {
            pokemonList = pokemonList.filter(pokemon => pokemon.weight < maxWeight);
        }

        return pokemonList;
    }

    const favoritePokemon = useSelector<StoreState, string[]>(state => (state.favoritePokemon.favoritePokemon));
    const pokemonList = useSelector<StoreState, IPokemonFragment[]>(pokemonSelector);
    const pokemonTypes = useSelector<StoreState, IType[]>(state => (state.initialData.types));

    const handleTypesFilter = (isTypeChecked: boolean, markedType: string) => {
        isTypeChecked ? setTypes([...types, markedType]) : setTypes(types.filter(type => type !== markedType))
    }


    const handleSetRangeValue = (inputName: string, weight: number) => {
        if (inputName.search('max') === 0) {
            setMaxWeight(weight);
        } else if (inputName.search('min') === 0) {
            setMinWeight(weight);
        }
    }


    const functions = {
        handleTypesFilter,
        handleSetRangeValue
    }

    return (
        <>
            <Navbar />
            <FlexContainer>
                <Sidebar >
                    <PokemonFilter functions={functions} typesList={pokemonTypes} />
                </Sidebar>
                <Dashboard pokemonList={pokemonList} />
            </FlexContainer>
        </>
    )
}

export default Main;