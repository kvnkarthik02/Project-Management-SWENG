import React from 'react';
// import { ComponentStory, ComponentMeta } from '@storybook/react';
import EmployeeCard from '../components/elements/EmployeeCard';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const colors = ["dark", "gray", "red", "pink", "grape", "violet", "indigo", "cyan", "teal", "green", "lime", "yellow", "orange"];


export default {
    title: 'Components/elements/EmployeeCard',
    component: EmployeeCard,
    argTypes: {
        avatarColor: {
            control: { type: "select", options: colors },
        }
    }
}

const sampleEmployee = {
    name: 'jon',
    email: 'jwk@tdcd.ie',
    role: 'dev',
    workload: 4,
    capacity: 6,
    avatarColor: 'red',
    projects: [],
    skills: [{
        name: "React",
        level: 3
    }, {
        name: "Node.js",
        level: 5
    }]
}

const Template = (args: JSX.IntrinsicAttributes) =>
    <EmployeeCard
        name={sampleEmployee.name}
        email={sampleEmployee.email}
        role={sampleEmployee.role}
        workload={sampleEmployee.workload}
        capacity={sampleEmployee.capacity}
        avatarColor={sampleEmployee.avatarColor}
        projects={sampleEmployee.projects}
        skills={sampleEmployee.skills}
        {...args} />

export const Card = Template.bind({})
