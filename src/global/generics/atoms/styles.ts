import styled from "styled-components";


interface IInputProps {
    name: string,
    isChecked?: boolean,
    type?: string,
}

export const Label = styled.label`
    font-size: .8rem;
    display: flex;
    flex-direction: column;

    font-weight: 500;
`;

export const FlexLabel = styled.label`
    font-size: .9rem;
    display: flex;
    margin-bottom: .5rem;
    font-weight: 500;
`;

export const FilterHeader = styled.h1`
    font-size: 1.2rem;
    flex-direction: column;
    margin-bottom: .5rem;
    font-weight: 500;
`;


export const Searchbar = styled.input`
    line-height: 1.5rem;
    width: 100%;
    border-radius: 15px;
    padding-left: .5rem;
`;


export const SmallInput = styled.input.attrs<IInputProps>((props) => ({ ...props }))`
    width: 60px;
    height: 30px;

    border-radius: 10px;

    padding-left: .5rem;
    margin-top: .3rem;
`;

export const SimpleFlexContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Checkbox = styled.input.attrs<IInputProps>((props) => ({ ...props }))`
    margin-right: .4rem;
    height: 13px;
`;

export const FiltersContainer = styled.div`
    padding: 1.3rem 10%;
    margin: 1rem;
    border-radius: 15px;
    background-color: rgb(247, 247, 247);
`;

export const SliderFilter = styled.input.attrs({ type: 'range', min: '0', max: '1000' })``;

export const NumberBadge = styled.span`
    border-radius: 5px;
    padding: 3px;

    font-size: .8rem;
    font-weight: 600;

    background-color: #616161;
    color: white;
    margin-left: .5rem;
    vertical-align: middle;
`;