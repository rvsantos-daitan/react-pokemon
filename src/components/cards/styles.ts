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

export const CardHeader = styled.h1`
  font-size: 1.5rem;
  font-family: sans-serif;

  margin: .5rem 0;
  text-transform: capitalize;
`;

interface IButtonProps {
  state?: IGenericProperties,
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
    margin: .2rem auto .7rem;
    font-size: 1rem;
    border-radius: 15px;
    cursor: pointer;
    width: 90%;
`;