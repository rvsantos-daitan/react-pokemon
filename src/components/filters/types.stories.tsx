import React from "react";

import TypesFilters from "./typesfilter";
import { TYPES_MOCK } from "../../mocks/types.mock";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  component: TypesFilters,
  title: "Components/Types Filter",
} as ComponentMeta<typeof TypesFilters>

const Template: ComponentStory<typeof TypesFilters> = (args) => <TypesFilters {...args} />;

export const Default = Template.bind({});
Default.args = {
  divider: 1,
  typesList: [...TYPES_MOCK],
  isChecked: false,
};

export const CheckedFilter = Template.bind({});
CheckedFilter.args = {
  ...Default.args,
  isChecked: true,
};
