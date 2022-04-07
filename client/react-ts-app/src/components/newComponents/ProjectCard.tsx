import React from 'react'
import parse from 'html-react-parser';

// projectId: "4f4cf77e-fa2a-49eb-8c24-b0c46a74eedd",
// projectName: "Landing page",
// projectDescription: "Complete frontend for landing page dashboard",
// hasDeadline: false,
// deadline: null,
// isComplete: false,
// tasks: [ ],

const projectCard = (props: {
    projectId: string,
    projectName: string,
    projectDescription: string,
    deadline: string,
    hasDeadline: boolean,
    badgeColor: string,
    isComplete: boolean
}) => {
    return (
        <div>projectCard</div>
    )
}

export default projectCard