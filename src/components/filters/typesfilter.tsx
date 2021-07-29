import { Checkbox, FilterHeader, FiltersContainer, FlexLabel } from "../../global/generics/atoms/styles"
import { ListItem, StandardList } from "../../global/generics/list/list";
import { IFilterGenericProps } from "../../interfaces/filter.model";
import { IType } from "../../interfaces/pokemon.model";

interface ICheckBoxProps extends IFilterGenericProps{
    isChecked: boolean,
    typesList: IType[],
}

const TypesFilters : React.FC<ICheckBoxProps> = ({setFilters, isChecked, typesList}) => {
 
    return (      
    <FiltersContainer>               
        <FilterHeader> Type:</FilterHeader>
        <StandardList>
            {typesList.map((type: IType) => (
                <ListItem key={type.name}> 
                   <FlexLabel htmlFor={type.name}>
                        <Checkbox onClick={setFilters} type='checkbox' name={type.name} defaultChecked={isChecked } /> {type.name}
                  </FlexLabel>
                </ListItem>))}
        </StandardList>
    </FiltersContainer >
    )
}

export default TypesFilters;