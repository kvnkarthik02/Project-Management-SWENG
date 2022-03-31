import React from 'react';
// import { ComponentStory, ComponentMeta } from '@storybook/react';
import TaskCard from '../components/elements/TaskCard';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// const colors = ["dark", "gray", "red", "pink", "grape", "violet", "indigo", "cyan", "teal", "green", "lime", "yellow", "orange"];


export default {
    title: 'Components/elements/TaskCard',
    component: TaskCard,
    // argTypes: {
    //     avatarColor: {
    //         control: { type: "select", options: colors },
    //     }
    // }
}


interface Task {
    name: string;
    subtasks: string[];
    teamMembers: string[];
    avatarColors: string[];
}
const task = {
    name: 'API Configuration',
    subtasks: ['Add CRUD Functions', 'Build Models', 'Finish Controller Scripts'],
    teamMembers: ["Tim", "Ben", "John", "Karthik", "Zee", "Mani", "Robert"],
    avatarColors: ["cyan", "yellow", "orange", "grape", "red", "teal", "violet", "indigo"],
    skills: ["react", 'typescript'],
}

const Template = (args: JSX.IntrinsicAttributes) => <TaskCard skills={task.skills} name={task.name} subtasks={task.subtasks} teamMembers={task.teamMembers} avatarColors={task.avatarColors} {...args} />

export const Card = Template.bind({})
// Card1.args = {
//     name: "Ben",
//     role: "Frontend Developer",
//     workload: 8,
//     capacity: 10,
// }
