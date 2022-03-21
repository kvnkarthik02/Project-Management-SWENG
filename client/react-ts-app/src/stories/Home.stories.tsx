import React from 'react';
// import { ComponentStory, ComponentMeta } from '@storybook/react';
import Playground from '../pages/Playground';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// const colors = ["dark", "gray", "red", "pink", "grape", "violet", "indigo", "cyan", "teal", "green", "lime", "yellow", "orange"];

export default {
    title: 'Components/Playground',
    component: Playground,
    // argTypes: {
    //     avatarColor: {
    //         control: { type: "select", options: colors },
    //     }
    // }
}

const Template = (args: JSX.IntrinsicAttributes) => <Playground {...args} />

export const HomePage = Template.bind({})
// Card1.args = {
//     name: "Ben",
//     role: "Frontend Developer",
//     workload: 8,
//     capacity: 10,
// }
