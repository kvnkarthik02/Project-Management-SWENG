import React from 'react';
// import { ComponentStory, ComponentMeta } from '@storybook/react';
import EmployeeCard from '../components/elements/EmployeeCard';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Components/elements/EmployeeCard',
    component: EmployeeCard,
}

// interface Employee {
//     name: string;
//     role: string;
//     workload: number;
//     capacity: number;
//   }

//   function EmployeeCard(employee: Employee) {

const Template = (args: JSX.IntrinsicAttributes) => <EmployeeCard name={''} role={''} workload={0} capacity={0} {...args} />

export const Card1 = Template.bind({})
// Card1.args = {
//     name: "Ben",
//     role: "Frontend Developer",
//     workload: 8,
//     capacity: 10,
// }

export const Card2 = Template.bind({})
// Card2.arguments = {
//     name: "Tim",
//     role: "Backend Developer",
//     workload: 9,
//     capacity: 10,
// }

export const Card3 = Template.bind({})
// Card3.arguments = {
//     name: "John",
//     role: "Project Manager",
//     workload: 7,
//     capacity: 10,
// }
