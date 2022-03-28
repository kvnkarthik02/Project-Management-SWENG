import React from 'react';
// import { ComponentStory, ComponentMeta } from '@storybook/react';
import HomePage from '../pages/HomePage';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// const colors = ["dark", "gray", "red", "pink", "grape", "violet", "indigo", "cyan", "teal", "green", "lime", "yellow", "orange"];

export default {
    title: 'Components/HomePage',
    component: HomePage,
    // argTypes: {
    //     avatarColor: {
    //         control: { type: "select", options: colors },
    //     }
    // }
}

interface Employee {
    name: string;
    role: string;
    workload: number;
    capacity: number;
    avatarColor: string;
}

const team: Employee[] = [
    {
        name: "Tim Kelly",
        role: "Senior Developer",
        workload: 6,
        capacity: 16,
        avatarColor: "red"
    }, {
        name: "Ben Vaughan",
        role: "Senior Developer",
        workload: 10,
        capacity: 16,
        avatarColor: "cyan"
    }, {
        name: "Johnny Shoe",
        role: "Senior Developer",
        workload: 13,
        capacity: 16,
        avatarColor: "yellow",
    }
]

// const colors = ["dark", "gray", "red", "pink", "grape", "violet", "indigo", "cyan", "teal", "green", "lime", "yellow", "orange"];

const images = [
    "https://images.unsplash.com/photo-1640622844217-a51dd0f51d19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1640622842223-e1e39f4bf627?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    "https://images.unsplash.com/photo-1638913970895-d3df59be1466?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80",
    "https://images.unsplash.com/photo-1552120476-9ee56c8611f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
];

const randomDescription = "With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway"

interface Project {
    name: string;
    description: string;
    badgeName: string;
    badgeColor: string;
    coverImgLink: string;
    projectPageLink: string;
    //   workload: number;
    //   capacity: number;
    //   avatarColor: string;
}

const sampleProjects: Project[] = [
    {
        name: 'Project I',
        description: randomDescription,
        badgeName: 'Frontend',
        badgeColor: "teal",
        coverImgLink: images[0],
        projectPageLink: ''
    },
    {
        name: 'Project II',
        description: randomDescription,
        badgeName: 'Backend',
        badgeColor: "orange",
        coverImgLink: images[1],
        projectPageLink: ''
    },
    {
        name: 'Project III',
        description: randomDescription,
        badgeName: 'Devops',
        badgeColor: "purple",
        coverImgLink: images[2],
        projectPageLink: ''
    }, {
        name: 'Project IV',
        description: randomDescription,
        badgeName: 'CI/CD',
        badgeColor: "red",
        coverImgLink: images[3],
        projectPageLink: ''
    },

]

const Template = (args: JSX.IntrinsicAttributes) => <HomePage team={team} projects={sampleProjects} {...args} />

export const home = Template.bind({})
// Card1.args = {
//     name: "Ben",
//     role: "Frontend Developer",
//     workload: 8,
//     capacity: 10,
// }
