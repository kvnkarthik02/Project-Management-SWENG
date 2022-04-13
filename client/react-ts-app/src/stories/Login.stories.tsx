import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Login from "../components/Login";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Components/Login',
    component: Login,
}

const Template = (args: JSX.IntrinsicAttributes) => <Login {...args} />

export const LoginPage = Template.bind({})