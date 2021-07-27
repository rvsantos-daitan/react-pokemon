import { Checkbox, FlexLabel } from "../../../global/generics/atoms/styles"
import { ListItem, StandardList } from "../../../global/generics/list/list"
import { IFilterGenericProps } from "../../../interfaces/filter.model"
import { IType } from "../../../interfaces/pokemon.model"

interface ICheckBoxProps extends IFilterGenericProps{
    isChecked: boolean,
    divider: number,
    typesList: IType[],
}

const CheckboxList = ({setFilters, isChecked, divider, typesList}: ICheckBoxProps) => {
    return (
        <StandardList>
            {typesList.map((type: IType, position: number) => (position % divider === 0 ?
            <ListItem key={position}> 
                <FlexLabel htmlFor={type.name}>
                    <Checkbox onClick={setFilters} {...{ type: 'checkbox', name: `${type.name}`, checked: isChecked }} /> {type.name}
                </FlexLabel>
                </ListItem>
                : null))}
        </StandardList>
    )
}

export default CheckboxList;