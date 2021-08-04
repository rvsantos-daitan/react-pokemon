import styled from "styled-components";

interface IWrapper {
    width?: string
    gridArea?: string
}

export const Wrapper = styled.div<IWrapper>`
${({ width, gridArea }) => {
        let cssValues: string = "";
        if (width) {
            cssValues = cssValues.concat(`width: ${width}; `)
        }

        if (gridArea) {
            cssValues = cssValues.concat(`grid-area: ${gridArea}; `)
        }

        return cssValues || "width: 100%;"
    }};
`;