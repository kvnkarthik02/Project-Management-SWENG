import { Grid, Group, Progress, Title, Text, Stack } from '@mantine/core';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ListSkills from '../components/ListSkills';
import ListTasks from '../components/ListTasks';
import ListTeam from '../components/ListTeam';
import { AppService } from '../services/app.services';
import Members from './Members';

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

interface Task {
    name: string;
    subtasks: string[];
    teamMembers: string[];
    avatarColors: string[];
}

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
        team: any[]
    }>({
        projectId: "",
        projectName: "",
        projectDescription: "",
        hasDeadline: "",
        deadline: "",
        isComplete: "",
        tasks: [],
        team: [],
    });
    let [members, setMembers] = useState<any[]>([]);


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

    useEffect(() => {
        const getTeam = async () => {
            try {
                const memberIds = project.team.map((t) => t.memberId)

                const teamMembers = memberIds.map(async (id) => (await AppService.getOneMember(projectId)));
                setMembers(teamMembers);
                console.log(teamMembers);

            } catch (err) {
                console.log(err);
            }
        };
        getTeam();
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
                    <Progress radius="lg" color="teal" size={25} value={60} style={{ width: 200, color: "#64E8B7", marginRight: -60 }} />
                </Group>
            </div>
            <div style={{ width: "510", margin: 'auto', padding: "5px", marginLeft: -70 }}>
                <Grid columns={2} >
                    <Grid.Col span={1}>
                        <Stack>
                            <ListSkills skills={[]} />
                            <Members team={members} isAdmin={true} />
                        </Stack>
                    </Grid.Col>
                    <Grid.Col span={1}>
                        {/* <ListTasks tasks={props.tasks} /> */}
                        <ListTasks tasks={sampleTasks} />
                    </Grid.Col>
                </Grid>
            </div>

        </div>
    )
}

export default Project