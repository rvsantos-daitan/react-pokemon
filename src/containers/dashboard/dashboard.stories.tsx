import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Provider } from "react-redux";
import { store } from "../../store";

import Dashboard from "./dashboard";
import { setHighlightedPokemon } from "../../store/actions/highlightedpokemon.action";
import { HIGHLIGHTED_POKEMON_MOCK } from "../../mocks/higlighted.mock";
import { IPokemonFragment } from "../../interfaces/pokemon.model";

export default {
    component: Dashboard,
    title: "Containers/Dashboard",
    decorators: [(story) => <Provider store={store}>{story()}</Provider>]
} as ComponentMeta<typeof Dashboard>

const Template : ComponentStory<typeof Dashboard> = args => <Dashboard {...args}/>

export const Default = Template.bind({});
Default.args = {};
Default.decorators = [(story) => {
    store.dispatch(setHighlightedPokemon({} as IPokemonFragment))
    return story();
}];

export const DashboardHighlighted = Template.bind({});
DashboardHighlighted.args = {};
DashboardHighlighted.decorators = [(story) => {
    store.dispatch(setHighlightedPokemon(HIGHLIGHTED_POKEMON_MOCK))
    return story();
}];