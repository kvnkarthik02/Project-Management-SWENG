import React from 'react';
// import { ComponentStory, ComponentMeta } from '@storybook/react';
// import EmployeeCard from '../components/elements/EmployeeCard';
// import EditComponent from '../components/EditComponent'
import ProjectAddModal from '../components/newComponents/ProjectAddModal';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// const colors = ["dark", "gray", "red", "pink", "grape", "violet", "indigo", "cyan", "teal", "green", "lime", "yellow", "orange"];


export default {
    title: 'Components/ProjectAddModal',
    component: ProjectAddModal,
    argTypes: {
        // avatarColor: {
        //     control: { type: "select", options: colors },
        // }
    }
}


// interface Employee {
//     name: string;
//     role: string;
//     workload: number;
//     capacity: number;
//     avatarColor: string;
// }

// const sampleEmployee: Employee = {
//     name: '',
//     role: '',
//     workload: 0,
//     capacity: 0,
//     avatarColor: ''
// }

// const Template = (args: JSX.IntrinsicAttributes) => <EmployeeCard employee={sampleEmployee} {...args} />
const Template = (args: JSX.IntrinsicAttributes) => <ProjectAddModal  {...args} />

export const Card = Template.bind({})
// Card1.args = {
//     name: "Ben",
//     role: "Frontend Developer",
//     workload: 8,
//     capacity: 10,
// }
