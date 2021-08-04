import filterFunctionFactory from '../../global/functions/filterfunctions.factory';
import WeightFilter from "../../components/filters/weightfilter";
import SearchBar from "../../components/filters/searchbar";
import TypesFilters from "../../components/filters/typesfilter";
import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StoreState } from '../../store';
import { IType } from '../../interfaces/pokemon.model';
import { filterPokemon, removeFilter } from '../../store/actions/filter.action';
import { setInitialTypesData } from '../../store/actions/fetchinitialdata.action';
import { Wrapper } from '../../global/generics/atoms/wrapper/wrapper';
import { FocusContext } from '../../contexts/focuscontext';

const PokemonFilter: React.FC = () => {
    const dispatch = useDispatch();
    const { filterFocusReference } = useContext(FocusContext);

    useEffect(() => {
        dispatch(setInitialTypesData());
    }, [])

    const pokemonTypes = useSelector<StoreState, IType[]>(state => (state.initialData.types));

    const execFilter = (inputType: string, name: string, inputProp: any) => {
        if (inputType === 'checkbox') {
            return handleTypesFilter(name, inputProp);
        }

        return handleSetRangeValue(name, inputProp);
    }

    const setFilters = (event: Event & { target: InputEvent }) => {
        const { target } = event;
        const filter = filterFunctionFactory(execFilter);
        filter[target.type](target);
    }

    const handleTypesFilter = (markedType: string, isTypeChecked: boolean) => {
        isTypeChecked ? dispatch(filterPokemon({ types: [markedType] })) : dispatch(removeFilter('types', markedType))
    }

    const handleSetRangeValue = (inputName: string, weight: number) => {
        if (inputName.search('max') === 0) {
            dispatch(filterPokemon({ maxWeight: weight }))
        } else if (inputName.search('min') === 0) {
            dispatch(filterPokemon({ minWeight: weight }));
        }
    }

    return (
        <Wrapper gridArea={"search"}>
            <SearchBar />
            <WeightFilter setFilters={setFilters} />
            <TypesFilters
                typesList={pokemonTypes}
                setFilters={setFilters}
                isChecked={false}
                ref={filterFocusReference}
            />
        </Wrapper>
    )
}

export default PokemonFilter;