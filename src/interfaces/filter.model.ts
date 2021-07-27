export default interface IFilter {
    types?: string[],
    minWeight?: number,
    maxWeight?: number
}

export interface IFilterGenericProps {
    setFilters: (parameters: any) => void
}