import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import Navbar from "./navbar";

export default {
  component: Navbar,
  title: "Components/Navigation Bar",
} as ComponentMeta<typeof Navbar>
const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Default = Template.bind({});
