import { StandardList } from "../../global/generics/list/list";
import { FiltersContainer, Label, FlexLabel, FilterLabel, Searchbar, SimpleFlexContainer, SmallInput, Checkbox } from "../../global/generics/atoms/styles";
import filterFunctionFactory from '../../global/functions/filterfunctions.factory';

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
            <FiltersContainer>
                <FilterLabel> Searchbox:
                    <Searchbar />
                </FilterLabel>
            </FiltersContainer >
            <FiltersContainer>
                <FilterLabel> Weight:
                    <SimpleFlexContainer>
                        <Label>Min
                            <SmallInput onChange={setFilters} {...{ type: 'number', name: 'minWeight' }} />
                        </Label>
                        <Label>Max
                            <SmallInput onChange={setFilters} {...{ type: 'number', name: 'maxWeight' }} />
                        </Label>
                    </SimpleFlexContainer>
                </FilterLabel>
            </FiltersContainer>
            <FiltersContainer>
                <FilterLabel> Type:
                    <SimpleFlexContainer>
                        <StandardList>
                            {props.typesList.map((type, position) => (position % 2 === 0 ?
                                <FlexLabel>
                                    <Checkbox onClick={setFilters} {...{ type: 'checkbox', name: `${type.name}` }} /> {type.name}
                                </FlexLabel>
                                : null))}
                        </StandardList>
                        <StandardList>
                            {props.typesList.map((type, position) => (position % 2 !== 0 ?
                                <FlexLabel>
                                    <Checkbox onClick={setFilters} {...{ type: 'checkbox', name: `${type.name}` }} /> {type.name}
                                </FlexLabel>
                                : null))}
                        </StandardList>
                    </SimpleFlexContainer>
                </FilterLabel >
            </FiltersContainer >
        </>
    )
}

export default PokemonFilter;