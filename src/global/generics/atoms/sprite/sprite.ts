import styled from "styled-components";

interface ISprite {
    width?: string
    gridArea?: string
}

export const Sprite = styled.img<ISprite>`
  ${({width, gridArea}) => {
      let cssValues: string = "";
      if(width) {
        cssValues = cssValues.concat(`width: ${width}; `)
      }

      if(gridArea) {
        cssValues = cssValues.concat(`grid-area: ${gridArea}; `)
      }

      return cssValues || "width: 100%;"
  }};
  justify-self: center;
`;