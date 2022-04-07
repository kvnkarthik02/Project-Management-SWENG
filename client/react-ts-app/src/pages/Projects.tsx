import React, { useEffect, useState } from 'react';
import { AppService } from '../services/app.services';
import moment from 'moment';
import { Card, Title, Stack, Box, Text, Group } from '@mantine/core';
import ProjectAddModal from '../components/newComponents/ProjectAddModal';
import ProjectEditModal from '../components/newComponents/ProjectEditModal';
import ProjectDeleteModal from '../components/newComponents/ProjectDeleteModal'
import parse from 'html-react-parser';


function Projects() {
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

    const handleDeleteProject = async (project: {
        projectId: any,
        projectName: any,
        projectDescription: any,
        hasDeadline: any,
        deadline: any,
        isComplete: any,
        tasks: any[],
    }) => {
        console.log(`Deleting project - ${project.projectName}`);
        // await AppService.deleteProject(project.projectId);
    }

    return (
        <div style={{ width: 710, margin: 'auto', padding: "5px" }}>
            <Card shadow="sm" p="lg" radius="md" withBorder={true}>
                <div style={{ width: 510, margin: 'auto', padding: "5px" }}>
                    <Group position="apart">
                        <Title order={1}>
                            <Text
                                color="dark"
                                inherit
                                component="span"
                                variant="text"
                                size="xl"
                                weight={700}
                                style={{ fontFamily: 'Greycliff CF, sans-serif' }}>Projects</Text>
                        </Title>
                        <ProjectAddModal />
                    </Group>
                    <Stack sx={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                        <Box sx={{ maxWidth: 600 }} mx="auto">

                            <ul>
                                {projects ? projects.map(project => (
                                    <li key={project.projectId}>
                                        <div style={{
                                            margin: '5px',
                                            padding: '5px',
                                        }}>
                                            <Card shadow="sm" p="lg" withBorder={true} onClick={() => { console.log(project) }}>
                                                <h1 id="name">Name: <strong >{project.projectName}</strong></h1>
                                                <p id="id">ID: <i>{project.projectId}</i></p>
                                                <p id="deadline">Deadline: <b>{project.deadline || "TBD"}</b></p>
                                                <p>hasDeadline: <b>{project.hasDeadline.toString()}</b></p>
                                                <p>isComplete: <b>{project.isComplete.toString()}</b></p>
                                                <p>Description: <em>{parse(project.projectDescription)}</em></p>
                                                <p>Tasks: {JSON.stringify(project.tasks, null, 2)}</p>
                                                <Group>
                                                    <ProjectEditModal project={project} />
                                                    <ProjectDeleteModal project={project} />
                                                </Group>
                                            </Card>
                                        </div>
                                    </li>
                                ))
                                    : <li>Loading...</li>
                                }
                            </ul>
                        </Box>

                    </Stack>
                </div>

            </Card >
        </div >

    )
}

export default Projects;