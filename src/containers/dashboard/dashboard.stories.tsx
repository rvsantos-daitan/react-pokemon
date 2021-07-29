import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Provider } from 'react-redux';
import { store } from '../../store';

import Dashboard from './dashboard';

export default {
    component: Dashboard,
    title: 'Dashboard',
    decorators: [(story) => <Provider store={store}>{story()}</Provider>]
} as ComponentMeta<typeof Dashboard>

const Template : ComponentStory<typeof Dashboard>= args => <Dashboard {...args}/>

export const Default = Template.bind({});
Default.args = {}
