import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import SearchBar from "./searchbar";

export default {
  component: SearchBar,
  title: "Searchbar",
} as ComponentMeta<typeof SearchBar>

const Template: ComponentStory<typeof SearchBar> = (args) => <SearchBar {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Filled = Template.bind({});
Filled.args = {
  value: "Test Information",
};
