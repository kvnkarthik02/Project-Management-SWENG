import React from 'react';
// import { ComponentStory, ComponentMeta } from '@storybook/react';
// import TaskCard from '../components/elements/TaskCard';
import ListTasks from '../components/ListTasks';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// const colors = ["dark", "gray", "red", "pink", "grape", "violet", "indigo", "cyan", "teal", "green", "lime", "yellow", "orange"];


export default {
    title: 'Components/TaskList',
    component: ListTasks,
    // argTypes: {
    //     avatarColor: {
    //         control: { type: "select", options: colors },
    //     }
    // }
}


interface Task {
    name: string;
    subtasks: string[];
    teammembers: string[];
    avatarColors: string[];
}

const sampleTasks: Task[] = [
    {
        name: 'API Configuration',
        subtasks: ['Add CRUD Functions', 'Build Models', 'Finish Controller Scripts'],
        teammembers: ["Tim", "Ben", "John", "Karthik", "Zee", "Mani", "Robert"],
        avatarColors: ["grape", "red", "teal", "violet", "indigo", "cyan", "yellow", "orange"]
    },
    {
        name: 'Website Redesign',
        subtasks: ['Update Landing Page', 'Adjust Log-in Form'],
        teammembers: ["John", "Ben", "Tim", "Karthik", "Zee", "Mani", "Robert"],
        avatarColors: ["cyan", "yellow", "orange", "grape", "red", "teal", "violet", "indigo"]
    },
    {
        name: 'Database Restructure',
        subtasks: ['Study Existing Database', 'Find areas to improve'],
        teammembers: ["Zee", "Mani", "Robert", "Tim", "Ben", "John", "Karthik"],
        avatarColors: ["grape", "red", "teal", "violet", "cyan", "yellow", "orange", "indigo"]
    }
]

const Template = (args: JSX.IntrinsicAttributes) => <ListTasks tasks={sampleTasks} {...args} />

export const Card = Template.bind({})
// Card1.args = {
//     name: "Ben",
//     role: "Frontend Developer",
//     workload: 8,
//     capacity: 10,
// }
