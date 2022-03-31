import React from 'react';
// import { ComponentStory, ComponentMeta } from '@storybook/react';
import ProjectCard from '../components/elements/ProejctCard'
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const colors = ["dark", "gray", "red", "pink", "grape", "violet", "indigo", "cyan", "teal", "green", "lime", "yellow", "orange"];

const images = ["https://images.unsplash.com/photo-1552120476-9ee56c8611f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1640622844217-a51dd0f51d19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1640622842223-e1e39f4bf627?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    "https://images.unsplash.com/photo-1638913970895-d3df59be1466?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80",];

const randomDescription = "With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway"


export default {
    title: 'Components/elements/ProjectCard',
    component: ProjectCard,
    argTypes: {
        coverImgLink: {
            control: { type: "select", options: images },
        },
        description: {
            default: randomDescription,
            control: { type: "text" }
        },
        badgeColor: {
            control: { type: "select", options: colors },
        }
    }
}

interface Project {
    name: string;
    description: string;
    badgeName: string;
    badgeColor: string;
    coverImgLink: string;
    projectPageLink: string;
    //   workload: number;
    //   capacity: number;
    //   avatarColor: string;
}

const project: Project = {
    name: 'SampleName',
    description: randomDescription,
    badgeName: 'Department',
    badgeColor: colors[3],
    coverImgLink: images[0],
    projectPageLink: ''
}
// const Template = (args: JSX.IntrinsicAttributes) => <EmployeeCard avatarColor={''} name={''} role={''} workload={0} capacity={0} {...args} />

const Template = (args: JSX.IntrinsicAttributes) => <ProjectCard
    name={project.name}
    description={project.description}
    badgeName={project.badgeName}
    badgeColor={project.badgeColor}
    // coverImgLink={project.coverImgLink}
    // projectPageLink={project.projectPageLink} 
    {...args} />
export const Card = Template.bind({})
// Card1.args = {
//     name: "Ben",
//     role: "Frontend Developer",
//     workload: 8,
//     capacity: 10,
// }
