import styled from "styled-components"

export const FlexContainer = styled.div`
    width: 100%;

    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr 2fr;
    grid-template-areas:
        "sprite header"
        "sprite types"
        "sprite button"
`;

interface IFlexColumnContainerProps {
    width: number
}

export const FlexColumnContainer = styled.div<IFlexColumnContainerProps>`
    ${({ width }): string => {
        if (width) return `width: ${width}%;`
        return "width: 100%;"
    }}
    display: flex;
    flex-direction:  column;
    justify-content: space-evenly;
`;