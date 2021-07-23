import styled from "styled-components"

export const FlexContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
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