import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Provider } from "react-redux";
import { store } from "../store";

import Main from "./main";

export default {
    component: Main,
    title: "Pages/Main Page",
    decorators: [(story) => <Provider store={store}>{story()}</Provider>]
} as ComponentMeta<typeof Main>

const Template: ComponentStory<typeof Main> = args => <Main {...args}/>

export const Default = Template.bind({});
Default.args = {}