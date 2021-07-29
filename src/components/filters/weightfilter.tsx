import React from "react"
import { FilterHeader, FiltersContainer, Label, SimpleFlexContainer, SmallInput } from "../../global/generics/atoms/styles"
import { IFilterGenericProps } from "../../interfaces/filter.model"

interface IWeightFilterProps extends IFilterGenericProps {
    minWeightValue?: number,
    maxWeightValue?: number,
}

const WeightFilter: React.FC<IWeightFilterProps> = ({setFilters, minWeightValue, maxWeightValue}) =>{

    return (
        <FiltersContainer>
            <FilterHeader> Weight: </FilterHeader>
                <SimpleFlexContainer>
                    <Label htmlFor="minWeight">Min:
                        <SmallInput onChange={setFilters} defaultValue={minWeightValue || null}
                        type='number'name='minWeight'/>
                    </Label>
                    <Label htmlFor="maxWeight">Max:
                        <SmallInput onChange={setFilters} defaultValue={maxWeightValue || null}
                        type='number' name='maxWeight' />
                    </Label>
                </SimpleFlexContainer>
        </FiltersContainer>
    )
}

export default WeightFilter