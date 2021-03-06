import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Provider } from "react-redux";
import { store } from "../../store";

import PokemonFilter from "./pokemonfilter";

export default {
  component: PokemonFilter,
  title: "Containers/Pokemon Filter Container",
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
} as ComponentMeta<typeof PokemonFilter>

const Template : ComponentStory<typeof PokemonFilter> = (args) => <PokemonFilter {...args} />;

export const Default = Template.bind({});
Default.args = {};
