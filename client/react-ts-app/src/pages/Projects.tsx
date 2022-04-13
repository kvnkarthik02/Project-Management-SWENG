import React, { useContext, useEffect, useState } from 'react';
import { AppService } from '../services/app.services';
import { Card, Title, Stack, Box, Text, Group, List, Code, Overlay } from '@mantine/core';
import ProjectAddModal from '../components/newComponents/ProjectAddModal';
import ProjectCard from '../components/elements/ProejctCard';
import { OverlayContext } from '../OverlayContext';
import { Link } from 'react-router-dom';


const Projects = (props: { isAdmin: boolean }) => {
    let [projects, setProjects] = useState<any[]>([]);
    const [overlay, setOverlay] = useContext(OverlayContext);
    // const isAdmin = true;

    useEffect(() => {
        const getProjects = async () => {
            try {
                const projectsResponse = await AppService.getProjects();
                setProjects(projectsResponse);
            } catch (err) {
                console.log(err);
            }
        };
        getProjects();
    }, [])

    return (
        <div style={{ width: 710, margin: 'auto', padding: "5px" }}>
            {overlay && <Overlay opacity={0.5} />}
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
                        {props.isAdmin && (<ProjectAddModal />)}
                        {/* {isAdmin && (<ProjectAddModal />)} */}
                    </Group>
                    <Stack sx={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                        <Box sx={{ maxWidth: 600 }} mx="auto">
                            <List>
                                {
                                    projects ? projects.map(project => (
                                        <List.Item>
                                            <div
                                                onClick={() => {
                                                    (!overlay) && console.log(project)
                                                }}
                                                // ref={`http://localhost:3000/project/${project.projectId}/`}
                                                style={{
                                                    margin: '5px',
                                                    padding: '5px',
                                                }}
                                            >
                                                {/* <Link to={`/project/${project.projectId}`}>
                                                    <h1>{project.projectId}</h1>
                                                </Link> */}
                                                {/* <Link to={createPath({ path: ROUTE.PROJECT_PAGE, params: { projectId: project.projectId } })}>Project Link</Link> */}
                                                {/* <Routes>
                                                    <Route path={createPath({ path: ROUTE.PROJECT_PAGE, params: { projectId: project.projectId } })} element={<Project />} />
                                                </Routes> */}
                                                <ProjectCard project={project} isAdmin={props.isAdmin} />

                                            </div>
                                        </List.Item>
                                    ))
                                        : < li > Loading...</li >}
                            </List >
                        </Box>

                    </Stack>
                </div >

            </Card >
        </div >

    )
}

export default Projects;