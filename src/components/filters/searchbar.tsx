import { FilterHeader, FiltersContainer, Searchbar} from "../../global/generics/atoms/styles";

interface ISearchBarProps {
  value?: string
}

const SearchBar: React.FC<ISearchBarProps> = ({value}) => {

  return (
    <FiltersContainer>
      <FilterHeader>
        Searchbox:
      </FilterHeader>
      <Searchbar defaultValue={value}/>
    </FiltersContainer>
  );
};

export default SearchBar;