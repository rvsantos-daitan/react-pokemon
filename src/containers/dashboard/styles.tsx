import styled from 'styled-components';

interface IContainerProps {
    gridArea?: string
}

export const Container = styled.div<IContainerProps>`
    ${({ gridArea }) => {
        let cssValues: string = "";

        if (gridArea) {
        cssValues = cssValues.concat(`grid-area: ${gridArea}; `)
        };

        if (!cssValues) return;

        return cssValues;
    }};
    display: flex;

    justify-content: center;
`;