import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 100%;
  height: fit-content;

  border-radius: 15px;

  padding: .7rem;

  margin: 1rem;

  background-color: rgb(247, 247, 247);

  display: flex;
  flex-direction: column;

  justify-content: space-between;
  text-align: center;
`;

export const Sprite = styled.img`
  width: 10rem;
  margin: 1rem auto .3rem 1rem;
`;

export const CardHeader = styled.h1`
font-size: 1.5rem;
font-family: sans-serif;

margin: .5rem 0;
`;

export const BadgeContainer = styled.div`
  display:flex;
  justify-content:space-evenly;
  margin: .2rem 0;
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
`;


export const Button = styled.button`
    margin: .2rem auto .7rem;
    background-color: transparent;
    font-size: 1rem;
    border-radius: 15px;
    cursor: pointer;
    width: 90%;
`;