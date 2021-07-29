import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import WeightFilter from "./weightfilter";

export default {
  component: WeightFilter,
  title: "Components/Weight Filter",
} as ComponentMeta<typeof WeightFilter>

const Template: ComponentStory<typeof WeightFilter> = (args) => <WeightFilter {...args} />;

export const Default = Template.bind({});
Default.args = {
  minWeightValue: null,
  maxWeightValue: null,
};

export const AllValues = Template.bind({});
AllValues.args = {
  minWeightValue: 20,
  maxWeightValue: 100,
};
