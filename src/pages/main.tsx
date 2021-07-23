import { useDispatch, useSelector } from "react-redux";
import Dashboard from "../containers/dashboard/dashboard"
import { Navbar } from "../components/header/navbar";
import Sidebar from "../components/sidebar/sidebar"
import { StoreState } from "../store";
import { FlexContainer } from "../global/generics/flexcontainer/flexcontainer";
import { fetchInital } from "../store/actions/fetchinitialdata.action";
import { useEffect } from "react";
import PokemonFilter from "../containers/filters/pokemonFilter";
import { IType } from "../interfaces/pokemon.model";
import { filterPokemon, removeFilter } from "../store/actions/filter.action";
import { selectPokemon } from "../store/selectors/filterselector";

const Main: React.FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchInital())
    }, [])

    const pokemonList = useSelector(selectPokemon);
    const pokemonTypes = useSelector<StoreState, IType[]>(state => (state.initialData.types));

    const handleTypesFilter = (isTypeChecked: boolean, markedType: string) => {
        isTypeChecked ? dispatch(filterPokemon({ types: [markedType] })) : dispatch(removeFilter('types', markedType))
    }

    const handleSetRangeValue = (inputName: string, weight: number) => {
        if (inputName.search('max') === 0) {
            dispatch(filterPokemon({ maxWeight: weight }))
        } else if (inputName.search('min') === 0) {
            dispatch(filterPokemon({ minWeight: weight }));
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