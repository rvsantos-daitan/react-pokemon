import { FilterLabel, SimpleFlexContainer } from "../../global/generics/atoms/styles"
import CheckboxList from "./atoms/checkboxlist"

const TypesFilters = (props) => {
    return (
    <FilterLabel> Type:
        <SimpleFlexContainer>
            <CheckboxList {...props}/>
            <CheckboxList {...props}/>       
        </SimpleFlexContainer>
    </FilterLabel >)
}

export default TypesFilters;