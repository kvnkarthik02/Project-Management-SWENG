import React from 'react';
// import { ComponentStory, ComponentMeta } from '@storybook/react';
import ListEmployees from '../components/ListEmployees';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const colors = ["dark", "gray", "red", "pink", "grape", "violet", "indigo", "cyan", "teal", "green", "lime", "yellow", "orange"];


interface Employee {
    name: string;
    email: string;
    role: string;
    workload: number;
    capacity: number;
    avatarColor: string;
}

const sampleTeam: Employee[] = [
    {
        name: "Tim Kelly",
        email: "tim@gmail.com",
        role: "Senior Developer",
        workload: 6,
        capacity: 16,
        avatarColor: "red"
    }, {
        name: "Johnny Shoe",
        email: "jshoe@tcd.ie",
        role: "Senior Developer",
        workload: 13,
        capacity: 16,
        avatarColor: "yellow",
    },
    {
        name: "Ben Vaughan",
        email: "ben@gmail.com",
        role: "Senior Developer",
        workload: 10,
        capacity: 16,
        avatarColor: "cyan"
    },
]

export default {
    title: 'Components/ListEmployees',
    component: ListEmployees,
    // argTypes: {
    //     avatarColor: {
    //         control: { type: "select", options: colors },
    //     }
    // }
}

const Template = (args: JSX.IntrinsicAttributes) => <ListEmployees team={sampleTeam} {...args} />

export const Card = Template.bind({})
// Card1.args = {
//     name: "Ben",
//     role: "Frontend Developer",
//     workload: 8,
//     capacity: 10,
// }
