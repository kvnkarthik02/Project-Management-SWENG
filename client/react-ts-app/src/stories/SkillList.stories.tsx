import React from 'react';
// import { ComponentStory, ComponentMeta } from '@storybook/react';
import TeamCard from '../components/elements/TeamCard';
import ListSkills from '../components/ListSkills';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const colors = ["dark", "gray", "red", "pink", "grape", "violet", "indigo", "cyan", "teal", "green", "lime", "yellow", "orange"];

// interface Employee {
//     name: string;
//     role: string;
//     workload: number;
//     capacity: number;
//     avatarColor: string;
// }

interface Skill {
    name: string;
    exp: string;

}

export default {
    title: 'Components/ListSkills',
    component: ListSkills,
}
const sampleSkills: Skill[] = [
    {
        name: "Django",
        exp: "Advanced"
    }, {
        name: "React.js",
        exp: "Novice"
    },
    {
        name: "Python",
        exp: "Advanced"
    },
    {
        name: "MongoDB",
        exp: "Novice"
    },
]

const Template = (args: JSX.IntrinsicAttributes) => <ListSkills skills={sampleSkills} />

export const Card = Template.bind({})
// Card1.args = {
//     name: "Ben",
//     role: "Frontend Developer",
//     workload: 8,
//     capacity: 10,
// }
