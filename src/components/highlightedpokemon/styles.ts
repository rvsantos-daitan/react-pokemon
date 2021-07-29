import styled from "styled-components";

interface IWrapper {
    width?: number
}

export const Wrapper = styled.div<IWrapper>`
    ${({ width }): string => {
        return `width: ${width}`
    }}
`;

export const HighlightedGrid = styled.div`
    height: fit-content;

    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 1fr 3fr auto;
    grid-template-areas: 
    "blank blank"
    "main-content secondary-content"
    "header       types"
`;

export const Header = styled.h1`
    grid-area: header;
    justify-self: center;
    text-transform: capitalize;
    color:  rgb(247,247,247);
`;
