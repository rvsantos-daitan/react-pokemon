import styled from 'styled-components';

interface ICardContainerProps {
  width?: string
}

export const CardContainer = styled.div<ICardContainerProps>`
  ${(props: ICardContainerProps): string => {
    if (!props.width) props.width = "100%";
    return `width: ${props.width};`
  }}
  height: fit-content;

  border-radius: 15px;

  padding: .7rem;
  margin-bottom: 1rem;

  background-color: rgb(247, 247, 247);

  display: flex;
  flex-direction: column;

  justify-content: space-between;
  text-align: center;
`;

interface ICardReader {
  gridArea?: string;
}

export const CardHeader = styled.h1<ICardReader>`
  ${({ gridArea }) => {
    let cssValues: string = "";

    if (gridArea) {
      cssValues = cssValues.concat(`grid-area: ${gridArea}; `)
    };

    if (!cssValues) return;

    return cssValues;
  }};
  font-size: 1.5rem;
  font-family: sans-serif;
  align-self: center;

  text-transform: capitalize;
`;

interface IButtonProps {
  state?: IGenericProperties,
  gridArea?: string
}

interface IGenericProperties {
  backgroundColor?: string
}

export const Button = styled.button<IButtonProps>`
  ${({ state }): string => {
    const colors = {
      'PokemonYellow': ' #FFCB05',
      'White': 'transparent'
    };

    return `background-color: ${colors[state.backgroundColor]};`
  }}

  ${({ gridArea }) => {
    let cssValues: string = "";

    if (gridArea) {
      cssValues = cssValues.concat(`grid-area: ${gridArea}; `)
    };

    if (!cssValues) return;

    return cssValues;
  }};
  margin: .2rem auto .7rem;
  font-size: 1rem;
  border-radius: 15px;
  cursor: pointer;
  width: 90%;
`;