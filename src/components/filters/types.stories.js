import React from "react";

import TypesFilters from "./typesfilter";
import { TYPES_MOCK } from "../../../mocks/types.mock";

export default {
  component: TypesFilters,
  title: "Types Filter",
};

const Template = (args) => <TypesFilters {...args} />;

export const Default = Template.bind({});
Default.args = {
  divider: 1,
  typesList: [...TYPES_MOCK],
  isChecked: "UNCHECKED",
};

export const CheckedFilter = Template.bind({});
CheckedFilter.args = {
  ...Default.args,
  isChecked: "CHECKED",
};
