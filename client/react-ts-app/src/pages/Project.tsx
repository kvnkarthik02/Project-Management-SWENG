import { Grid, Group, Progress, Title, Text } from '@mantine/core';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ListSkills from '../components/ListSkills';
import ListTeam from '../components/ListTeam';
import { AppService } from '../services/app.services';

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
    const params = useParams();
    const projectId = params.projectId;

    let [project, setProject] = useState<{
        projectId: any,
        projectName: any,
        projectDescription: any,
        hasDeadline: any,
        deadline: any,
        isComplete: any,
        tasks: any[],
    }>({
        projectId: "",
        projectName: "",
        projectDescription: "",
        hasDeadline: "",
        deadline: "",
        isComplete: "",
        tasks: [],
    });

    useEffect(() => {
        const getProject = async () => {
            try {
                const projectResponse = await AppService.getOneProjects(projectId);
                setProject(projectResponse);
                console.log(projectResponse);
            } catch (err) {
                console.log(err);
            }
        };
        getProject();
    }, [])

    return (
        <div style={{ width: "80%", margin: 'auto', padding: "5px" }}>
            <div style={{ width: "510", margin: 'auto', padding: "5px" }}>
                <Group position="apart">
                    <Title order={1}>
                        <Text
                            color="dark"
                            inherit
                            component="span"
                            variant="text"
                            // variant="gradient"
                            // gradient={{ from: 'indigo', to: 'pink', deg: 45 }}
                            size="xl"
                            weight={700}
                            style={{ fontFamily: 'Greycliff CF, sans-serif' }}>{project.projectName}</Text>
                    </Title>
                    {/* <Progress radius="lg" color="teal" size={25} value={props.progress} style={{ width: 200, color: "#64E8B7", marginRight: -60 }} /> */}
                </Group>
            </div>
            <div style={{ width: "510", margin: 'auto', padding: "5px", marginLeft: -70 }}>
                <Grid columns={2} >
                    <Grid.Col span={1}>
                        <Group direction="column">
                            {/* <ListSkills skills={props.skills} />
                            <ListTeam team={props.project.team} />
                            <ListTeam /> */}
                        </Group>
                    </Grid.Col>
                    <Grid.Col span={1}>
                        {/* <ListTasks tasks={props.tasks} /> */}
                    </Grid.Col>
                </Grid>
            </div>

        </div>
    )
}

export default Project