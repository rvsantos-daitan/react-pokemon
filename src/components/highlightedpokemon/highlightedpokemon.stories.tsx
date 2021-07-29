import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { POKEMON_MOCK } from "../../mocks/pokemon.mock";

import HighlightedPokemon from "./highlightedpokemon";

export default {
  component: HighlightedPokemon,
  title: "Selected Pokémon",
} as ComponentMeta<typeof HighlightedPokemon>

const Template: ComponentStory<typeof HighlightedPokemon> = (args) => <HighlightedPokemon {...args} />;

export const Default = Template.bind({});
Default.args = {
  highlightedPokemon: POKEMON_MOCK,
};

export const NoSelection = Template.bind({});
NoSelection.args = {
  highlightedPokemon: null,
};
