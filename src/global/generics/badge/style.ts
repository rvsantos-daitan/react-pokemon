import styled from "styled-components";

interface IBadgeContainer {
  gridArea: string;
}

export const BadgeContainer = styled.div<IBadgeContainer>`
  ${({ gridArea }) => {
    return gridArea && `grid-area: ${gridArea};`
  }}
  display:flex;
  justify-content:space-evenly;
  margin: .2rem 0;
  text-align: center;
`;

interface ITypeBadge {
  typename: string;
}

export const Badge = styled.h6<ITypeBadge>`
  ${({ typename }): string => {
    const types = {
      normal: '#A8A878',
      grass: '#78C850',
      fire: '#F08030',
      electric: ' #F8D030',
      ice: '#98D8D8',
      water: ' #6890F0',
      fighting: '#C03028',
      ghost: '#705898',
      poison: '#A040A0',
      ground: '#E0C068',
      flying: '#A890F0',
      psychic: '#F85888',
      bug: '#A8B820',
      rock: '#B8A038',
      dark: '#705848',
      dragon: '#7038F8',
      steel: '#B8B8D0',
      fairy: '#EE99AC',
    }

    if (typename === "poison") {
      return `
        background-color: ${types[typename]};
        color: white;
      `;
    }

    return `background-color: ${types[typename]};`
  }}
  padding: 5px 0;
  border-radius: 15px; 
  width: 40%;
  height: fit-content;
  align-self: center;
`;