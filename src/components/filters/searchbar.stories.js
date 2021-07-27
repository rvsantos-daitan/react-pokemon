import React from "react";

import SearchBar from "./searchbar";

export default {
  component: SearchBar,
  title: "Searchbar",
};

const Template = (args) => <SearchBar {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Filled = Template.bind({});
Filled.args = {
  value: "Test Information",
};
