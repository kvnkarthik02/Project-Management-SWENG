import React from 'react';
// import { ComponentStory, ComponentMeta } from '@storybook/react';
import EmployeeCard from '../components/elements/EmployeeCard';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const colors = ["dark", "gray", "red", "pink", "grape", "violet", "indigo", "cyan", "teal", "green", "lime", "yellow", "orange"];


export default {
    title: 'Components/elements/EmployeeCard',
    component: EmployeeCard,
    argTypes: {
        isAdmin: {
            control: { type: "select", options: [true, false] },
        }
    }
}

const sampleEmployee = {
    memberId: "62543ae1cd0eb5749a9fc2c5",
    firstName: 'Jon',
    lastName: 'Swanson',
    email: 'jwk@tdcd.ie',
    role: 'dev',
    hoursAllocated: 4,
    hoursAvailable: 6,
    avatarColor: 'red',
    projects: ["sample project"],
    skills: [{
        name: "React",
        level: 3
    }, {
        name: "Node.js",
        level: 5
    }]
}

const Template = (args: JSX.IntrinsicAttributes) =>
    <EmployeeCard member={sampleEmployee} isAdmin={false} {...args} />

export const Card = Template.bind({})
