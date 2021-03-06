
import React from 'react';
// import { ComponentStory, ComponentMeta } from '@storybook/react';
import SkillCard from '../components/elements/SkillCard';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const colors = ["dark", "gray", "red", "pink", "grape", "violet", "indigo", "cyan", "teal", "green", "lime", "yellow", "orange"];

// interface Employee {
//     name: string;
//     role: string;
//     workload: number;
//     capacity: number;
//     avatarColor: string;
// }

export default {
    title: 'Components/elements/SkillCard',
    component: SkillCard,
}
// const sampleTeam: Employee[] = [
//     {
//         name: "Tim Kelly",
//         role: "Senior Developer",
//         workload: 6,
//         capacity: 16,
//         avatarColor: "red"
//     }, {
//         name: "Johnny Shoe",
//         role: "Senior Developer",
//         workload: 13,
//         capacity: 16,
//         avatarColor: "yellow",
//     },
//     {
//         name: "Ben Vaughan",
//         role: "Senior Developer",
//         workload: 10,
//         capacity: 16,
//         avatarColor: "cyan"
//     },
// ]
const skill = {
    name: "Django",
    exp: 4
}

const Template = (args: JSX.IntrinsicAttributes) => <SkillCard name={skill.name} exp={skill.exp} />

export const Card = Template.bind({})
// Card1.args = {
//     name: "Ben",
//     role: "Frontend Developer",
//     workload: 8,
//     capacity: 10,
// }
