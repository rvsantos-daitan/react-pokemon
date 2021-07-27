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

export const FilterLabel = styled.label`
    font-size: 1.2rem;
    display: flex;
    flex-direction: column;
    margin: .5rem;
    font-weight: 500;
`;


export const Searchbar = styled.input`
    line-height: 1.5rem;

    border-radius: 15px;
    padding-left: .5rem;
`;


export const SmallInput = styled.input.attrs<IInputProps>((props) => ({ ...props }))`
    width: 60px;
    height: 30px;

    border-radius: 10px;
    padding-left: .5rem;
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
    width: 100%;
    padding: .5rem 10%;
    margin: 1rem;
    border-radius: 15px;
    background-color: rgb(247, 247, 247);
`;

export const SliderFilter = styled.input.attrs({ type: 'range', min: '0', max: '1000' })``;
