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
    teammembers: string[];
    avatarColors: string[];
}
const sampleTask: Task = {
    name: 'API Configuration',
    subtasks: ['Add CRUD Functions', 'Build Models', 'Finish Controller Scripts'],
    teammembers: ["Tim", "Ben", "John", "Karthik", "Zee", "Mani", "Robert"],
    avatarColors: ["cyan", "yellow", "orange", "grape", "red", "teal", "violet", "indigo"]

}

const Template = (args: JSX.IntrinsicAttributes) => <TaskCard task={sampleTask} {...args} />

export const Card = Template.bind({})
// Card1.args = {
//     name: "Ben",
//     role: "Frontend Developer",
//     workload: 8,
//     capacity: 10,
// }
