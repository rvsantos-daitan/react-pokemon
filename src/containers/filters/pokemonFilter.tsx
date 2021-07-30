import filterFunctionFactory from '../../global/functions/filterfunctions.factory';
import WeightFilter from "../../components/filters/weightfilter";
import SearchBar from "../../components/filters/searchbar";
import TypesFilters from "../../components/filters/typesfilter";
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StoreState } from '../../store';
import { IType } from '../../interfaces/pokemon.model';
import { filterPokemon, removeFilter } from '../../store/actions/filter.action';
import { setInitialTypesData } from '../../store/actions/fetchinitialdata.action';

const PokemonFilter: React.FC = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(setInitialTypesData());
    }, [])

    const pokemonTypes = useSelector<StoreState, IType[]>(state => (state.initialData.types));

    const execFilter = (inputType: string, ...values) => {        
        if (inputType === 'checkbox') {
            return handleTypesFilter(values[0], values[1]);
        }

        return handleSetRangeValue(values[0], values[1]);
    }

    const setFilters = (event: Event & { target: InputEvent}) => {
        const { target } = event;
        const filter = filterFunctionFactory(execFilter);
        filter[target.type](target);
    }

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

    return (
        <>
            <SearchBar/>
            <WeightFilter setFilters={setFilters}/>
            <TypesFilters typesList={pokemonTypes} setFilters={setFilters} isChecked={false}/>
        </>
    )
}

export default PokemonFilter;