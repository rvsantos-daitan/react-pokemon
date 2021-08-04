import styled from "styled-components";

export const FlexWrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-areas: "search dashboard";
    padding: 0 2.5%;
`;