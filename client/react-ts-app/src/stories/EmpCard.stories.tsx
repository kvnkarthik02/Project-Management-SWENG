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


// interface Employee {
//     name: string;
//     role: string;
//     workload: number;
//     capacity: number;
//     avatarColor: string;
// }

const sampleEmployee = {
    name: 'jon',
    email: 'jwk@tdcd.ie',
    role: 'dev',
    workload: 4,
    capacity: 6,
    avatarColor: 'red'
}

const name: string = 'jon';
const email: string = 'jwk@tdcd.ie';
const role: string = 'dev';
const workload: number = 4;
const capacity: number = 6;
const avatarColor: string = 'red';



const Template = (args: JSX.IntrinsicAttributes) =>
    <EmployeeCard name={sampleEmployee.name}
        email={sampleEmployee.email}
        role={sampleEmployee.role}
        workload={sampleEmployee.workload}
        capacity={sampleEmployee.capacity}
        avatarColor={sampleEmployee.avatarColor} {...args} />
{/* <EmployeeCard name={name}
        email={email}
        role={role}
        workload={workload}
        capacity={capacity}
        avatarColor={avatarColor} {...args} /> */}

export const Card = Template.bind({})
// Card1.args = {
//     name: "Ben",
//     role: "Frontend Developer",
//     workload: 8,
//     capacity: 10,
// }
