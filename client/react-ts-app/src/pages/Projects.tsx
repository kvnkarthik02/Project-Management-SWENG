import React, { useEffect, useState } from 'react';
import { AppService } from '../services/app.services';
import { Card, Title, Stack, Box, Text, Group, List } from '@mantine/core';
import ProjectAddModal from '../components/newComponents/ProjectAddModal';
import ProjectCard from '../components/elements/ProejctCard';


function Projects() {
    let [projects, setProjects] = useState<any[]>([]);
    const isAdmin = true;

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
                        {/* {props.isAdmin && (<ProjectAddModal />)} */}
                        {isAdmin && (<ProjectAddModal />)}
                    </Group>
                    <Stack sx={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                        <Box sx={{ maxWidth: 600 }} mx="auto">

                            <List>
                                {projects ? projects.map(project => (
                                    <List.Item>
                                        <div style={{
                                            margin: '5px',
                                            padding: '5px',
                                        }}>
                                            <ProjectCard project={project} isAdmin={isAdmin} />
                                        </div>
                                    </List.Item>
                                ))
                                    : <li>Loading...</li>
                                }
                            </List>
                        </Box>

                    </Stack>
                </div>

            </Card >
        </div >

    )
}

export default Projects;