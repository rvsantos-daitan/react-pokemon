import styled from "styled-components";

export const StandardList = styled.ul`
    width: 100%;
    padding: 0;
    list-style:none;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
`;

export const ListItem = styled.li`
    width: fit-content;
`;
