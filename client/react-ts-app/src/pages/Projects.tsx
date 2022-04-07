import React, { useEffect, useState } from 'react';
import { AppService } from '../services/app.services';
import moment from 'moment';
import { Card, Button, Title, Stack, Box, TextInput, Checkbox, Group } from '@mantine/core';
import { useForm } from '@mantine/form';
import { DatePicker } from '@mantine/dates';
import ProjectAddModal from '../components/newComponents/ProjectAddModal';
import parse from 'html-react-parser';

// id: string,
//     //     name: string;
//     //     description: string;
//     //     hasDeadline: boolean;
//     //     deadline: string;
//     //     isComplete: boolean;
//     //     tasks: string[];

function Projects() {
    // const form = useForm({
    //     initialValues: {
    //         projectName: "",
    //         projectDescription: "",
    //         hasDeadline: false,
    //         deadline: '',
    //         isComplete: false,
    //         tasks: [],
    //     },
    // });


    let [projects, setProjects] = useState<any[]>([]);
    // const [date, setDate] = useState<Date | null>();

    useEffect(() => {
        const getProjects = async () => {
            try {
                const response = await AppService.getProjects();
                setProjects(response);
                console.log(response);
            } catch (err) {
                console.log(err);
            }
        };

        getProjects();
    }, [])

    // const handleMakeProject = async (data: any) => {
    //     console.log(`Button Pressed`);
    //     console.log(`Projects`)
    //     // await AppService.makeProjects(data);
    //     console.log(data);
    // }

    return (
        <Card sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between'
        }}>

            <Stack sx={{
                display: 'flex',
                justifyContent: 'center'
            }}>
                <Title order={1}>Projects</Title>
                <ul>
                    {projects ? projects.map(project => (
                        <li key={project.projectId}>
                            <div style={{
                                margin: '5px',
                                padding: '5px',
                            }}>
                                <Card shadow="sm" p="lg" withBorder={true}>
                                    <h1>Name: <strong >{project.projectName}</strong></h1>
                                    <p>ID: <i>{project.projectId}</i></p>
                                    <p>Deadline: <b>{project.deadline || "TBD"}</b></p>
                                    <p>hasDeadline: <b>{project.hasDeadline.toString()}</b></p>
                                    <p>isComplete: <b>{project.isComplete.toString()}</b></p>
                                    <p>Description: <em>{parse(project.projectDescription)}</em></p>
                                    <p>Tasks: {JSON.stringify(project.tasks, null, 2)}</p>
                                </Card>
                            </div>
                        </li>
                    ))
                        : <li>Loading...</li>
                    }
                </ul>

                <Box sx={{ maxWidth: 600 }} mx="auto">
                    <ProjectAddModal />
                </Box>

            </Stack>
        </Card >
    )
}

export default Projects;



