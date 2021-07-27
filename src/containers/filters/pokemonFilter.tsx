import { StandardList, ListItem } from "../../global/generics/list/list";
import { FiltersContainer, Label, FlexLabel, FilterLabel, Searchbar, SimpleFlexContainer, SmallInput, Checkbox } from "../../global/generics/atoms/styles";
import filterFunctionFactory from '../../global/functions/filterfunctions.factory';
import { IType } from "../../interfaces/pokemon.model";
import WeightFilter from "../../components/filters/weightfilter";
import SearchBar from "../../components/filters/searchbar";

const PokemonFilter = (props) => {

    const execFilter = (inputType: string, ...values) => {
        const { functions } = props;
        if (inputType === 'checkbox') {
            return functions.handleTypesFilter(values[0], values[1]);
        }

        return functions.handleSetRangeValue(values[0], values[1]);
    }

    const setFilters = (event) => {
        const { target } = event;
        const filter = filterFunctionFactory(execFilter);
        filter[target.type](target);
    }

    return (
        <>
            <SearchBar/>
            <WeightFilter {...{setFilters}}/>
            <FiltersContainer>
                <FilterLabel> Type:
                    <SimpleFlexContainer>
                        <StandardList>
                            {props.typesList.map((type: IType, position: number) => (position % 2 === 0 ?
                               <ListItem key={position}> 
                                   <FlexLabel htmlFor={type.name}>
                                    <Checkbox onClick={setFilters} {...{ type: 'checkbox', name: `${type.name}` }} /> {type.name}
                                 </FlexLabel>
                                </ListItem>
                                : null))}
                        </StandardList>
                        <StandardList>
                            {props.typesList.map((type: IType, position: number) => (position % 2 !== 0 ?
                            <ListItem key={position}>
                                <FlexLabel htmlFor={type.name}>
                                    <Checkbox onClick={setFilters} {...{ type: 'checkbox', name: `${type.name}` }} /> {type.name}
                                </FlexLabel>
                                </ListItem>
                                : null))}
                        </StandardList>
                    </SimpleFlexContainer>
                </FilterLabel >
            </FiltersContainer >
        </>
    )
}

export default PokemonFilter;