import IFilter from "../../interfaces/filter.model";

export const filterPokemon = (filters: IFilter) => (
    {
        type: "filter/addfilter",
        filters
    }
);

export const removeFilter = (filterName: string, filterValue: string) => (
    {
        type: "filter/removefilter",
        filterName,
        filterValue
    }
);

export const cleanFilters = () => (
    {
        type: "filter/clean",
    }
);