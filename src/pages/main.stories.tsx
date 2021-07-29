import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Provider } from "react-redux";
import { store } from "../store";

import Main from "./main";

export default {
    component: Main,
    title: "Pages/Main Page",
    decoratos: [story => <Provider store={store}>{story()}</Provider>]
} as ComponentMeta<typeof Main>

const Template: ComponentStory<typeof Main> = args => <Main {...args}/>

export const Default = Template.bind({});
Default.args = {}