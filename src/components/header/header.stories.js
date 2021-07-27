import React from "react";

import { Navbar } from "./navbar";

export default {
  component: Navbar,
  title: "Navigation Bar",
};

const Template = (args) => <Navbar {...args} />;

export const Default = Template.bind({});
