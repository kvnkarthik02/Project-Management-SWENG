import React from 'react'
import { useParams } from 'react-router-dom';

// const Project = (props: {
//     project: {
//         projectId: any,
//         projectName: any,
//         projectDescription: any,
//         hasDeadline: any,
//         deadline: any,
//         isComplete: any,
//         tasks: any[],
//     },
//     isAdmin: boolean
// }) => {
const Project = (props: { isAdmin: boolean }) => {
    // const Project = () => {
    const params = useParams();
    const projectId = params.projectId;
    console.log(projectId)
    console.log(params)

    return (
        <div>
            <h1>Project Id - {projectId}</h1>
        </div>
    )
}

export default Project