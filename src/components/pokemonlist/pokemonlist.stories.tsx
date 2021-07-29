import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { POKEMON_MOCK } from "../../mocks/pokemon.mock";
import { Favorite } from "../cards/card.stories";

import PokemonList from "./pokemonlist";

export default {
    component: PokemonList,
    title: "Components/Pokémon List"
} as ComponentMeta<typeof PokemonList>

const Template: ComponentStory<typeof PokemonList> = args => <PokemonList {...args}/>;

export const Default = Template.bind({});
Default.args = {
    pokemonList: [POKEMON_MOCK],
    display: "flex",
    displayButton: true
}

export const FavoritePokemonList = Template.bind({});
FavoritePokemonList.args ={
    ...Default.args,
    pokemonList: [Favorite.args.pokemon]
}

export const EmptyList = Template.bind({});
EmptyList.args ={
    ...Default.args,
    pokemonList: []
}

export const ButtonlessPokemonCard = Template.bind({});
ButtonlessPokemonCard.args ={
    ...Default.args,
    displayButton: false
}