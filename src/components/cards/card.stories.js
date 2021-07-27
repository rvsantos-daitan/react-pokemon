import React from "react";

import Card from "./card";

import { POKEMON_MOCK } from "../../../mocks/pokemon.mock";

export default {
  component: Card,
  title: "Card",
  decorators: [(story) => <div style={{ width: "40%" }}>{story()}</div>],
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  pokemon: {
    ...POKEMON_MOCK,
  },
  display: "flex",
  displayButton: true,
  cardWidth: null,
};

export const VerticalCard = Template.bind({});
VerticalCard.args = {
  ...Default.args,
  display: "block",
  cardWidth: "fit-content",
};

export const ButtonLess = Template.bind({});
ButtonLess.args = {
  ...Default.args,
  displayButton: false,
};

export const Favorite = Template.bind({});
Favorite.args = {
  ...Default.args,
  pokemon: {
    ...POKEMON_MOCK,
    isFavorite: true,
  },
};
