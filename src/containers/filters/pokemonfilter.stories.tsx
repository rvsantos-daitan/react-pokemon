import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Provider } from "react-redux";
import { store } from "../../store";

import PokemonFilter from "./pokemonfilter";

export default {
  component: PokemonFilter,
  title: "Pokemon Filter Container",
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
} as ComponentMeta<typeof PokemonFilter>

const Template : ComponentStory<typeof PokemonFilter> = (args) => <PokemonFilter {...args} />;

export const Default = Template.bind({});
Default.args = {};
