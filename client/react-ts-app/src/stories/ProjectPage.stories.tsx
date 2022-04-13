import React from 'react';
// import { ComponentStory, ComponentMeta } from '@storybook/react';
// import HomePage from '../pages/HomePage';
import ProjectPage from '../pages/ProjectPage';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// const colors = ["dark", "gray", "red", "pink", "grape", "violet", "indigo", "cyan", "teal", "green", "lime", "yellow", "orange"];

export default {
    title: 'Components/ProjectPage',
    component: ProjectPage,
    // argTypes: {
    //     avatarColor: {
    //         control: { type: "select", options: colors },
    //     }
    // }
}
interface Employee {
    name: string;
    email: string;
    role: string;
    workload: number;
    capacity: number;
    avatarColor: string;
}
interface Task {
    name: string;
    subtasks: string[];
    teamMembers: string[];
    avatarColors: string[];
}
interface Skill {
    name: string;
    exp: number;
}
interface Project {
    name: string;
    progress: number;
    team: Employee[];
    skills: Skill[];
    tasks: Task[];
}

const sampleTeam: Employee[] = [
    {
        name: "Tim Kelly",
        email: "tim@gmail.com",
        role: "Senior Developer",
        workload: 6,
        capacity: 16,
        avatarColor: "red"
    }, {
        name: "Johnny Shoe",
        email: "jshoe@tcd.ie",
        role: "Senior Developer",
        workload: 13,
        capacity: 16,
        avatarColor: "yellow",
    },
    {
        name: "Ben Vaughan",
        email: "ben@gmail.com",
        role: "Senior Developer",
        workload: 10,
        capacity: 16,
        avatarColor: "cyan"
    },
]

const sampleSkills: Skill[] = [
    {
        name: "Django",
        exp: 4
    }, {
        name: "React.js",
        exp: 2
    },
    {
        name: "Python",
        exp: 3
    },
    {
        name: "MongoDB",
        exp: 2
    },
]

const sampleTasks: Task[] = [
    {
        name: 'API Configuration',
        subtasks: ['Add CRUD Functions', 'Build Models', 'Finish Controller Scripts'],
        teamMembers: ["Tim", "Ben", "John", "Karthik", "Zee", "Mani", "Robert"],
        avatarColors: ["grape", "red", "teal", "violet", "indigo", "cyan", "yellow", "orange"]
    },
    {
        name: 'Website Redesign',
        subtasks: ['Update Landing Page', 'Adjust Log-in Form'],
        teamMembers: ["John", "Ben", "Tim", "Karthik", "Zee", "Mani", "Robert"],
        avatarColors: ["cyan", "yellow", "orange", "grape", "red", "teal", "violet", "indigo"]
    },
    {
        name: 'Database Restructure',
        subtasks: ['Study Existing Database', 'Find areas to improve'],
        teamMembers: ["Zee", "Mani", "Robert", "Tim", "Ben", "John", "Karthik"],
        avatarColors: ["grape", "red", "teal", "violet", "cyan", "yellow", "orange", "indigo"]
    }
]

const sampleProject: Project = {
    name: 'Propylon Web Application',
    progress: 60,
    team: sampleTeam,
    skills: sampleSkills,
    tasks: sampleTasks,
}
const Template = (args: JSX.IntrinsicAttributes) => <ProjectPage name={sampleProject.name} progress={sampleProject.progress} team={sampleProject.team} skills={sampleProject.skills} tasks={sampleProject.tasks} />

export const home = Template.bind({})
// Card1.args = {
//     name: "Ben",
//     role: "Frontend Developer",
//     workload: 8,
//     capacity: 10,
// }
