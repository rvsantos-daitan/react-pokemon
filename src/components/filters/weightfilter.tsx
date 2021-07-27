import { FilterLabel, FiltersContainer, Label, SimpleFlexContainer, SmallInput } from "../../global/generics/atoms/styles"
import { IFilterGenericProps } from "../../interfaces/filter.model"

const WeightFilter = ({setFilters}: IFilterGenericProps) =>{

    return (
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
    )
}

export default WeightFilter