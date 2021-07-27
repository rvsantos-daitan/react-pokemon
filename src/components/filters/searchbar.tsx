import { FilterLabel, FiltersContainer, Searchbar} from "../../global/generics/atoms/styles";

const SearchBar = () => {

  return (
    <FiltersContainer>
      <FilterLabel>
        Searchbox:
        <Searchbar />
      </FilterLabel>
    </FiltersContainer>
  );
};

export default SearchBar;