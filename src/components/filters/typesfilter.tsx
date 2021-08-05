import React from "react";
import { Checkbox, FilterHeader, FiltersContainer, FlexLabel } from "../../global/generics/atoms/styles"
import { ListItem, StandardList } from "../../global/generics/list/list";
import { IFilterGenericProps } from "../../interfaces/filter.model";
import { IType } from "../../interfaces/pokemon.model";

interface ICheckBoxProps extends IFilterGenericProps {
    isChecked: boolean,
    typesList: IType[],
}

const TypesFilters = React.forwardRef<HTMLInputElement, ICheckBoxProps>(({ setFilters, isChecked, typesList }, ref) => {

    return (
        <FiltersContainer >
            <FilterHeader> Type:</FilterHeader>
            <StandardList>
                {typesList.map((type: IType, position: number) => (
                    <ListItem key={type.name}>
                        <FlexLabel htmlFor={type.name}>
                            <Checkbox
                                onClick={setFilters}
                                type='checkbox'
                                name={type.name}
                                defaultChecked={isChecked}
                                ref={position === typesList.length - 1 ? ref : null}
                            /> {type.name}
                        </FlexLabel>
                    </ListItem>))}
            </StandardList>
        </FiltersContainer >
    )
})

export default TypesFilters;