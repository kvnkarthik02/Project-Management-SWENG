import React from 'react'
import ListTeam from "../components/ListTeam";
import ListSkills from "../components/ListSkills";
import ListTasks from "../components/ListTasks";
import { Group, Button, Title, Text, Progress, Grid } from '@mantine/core';

interface Employee {
    name: string;
    role: string;
    workload: number;
    capacity: number;
    avatarColor: string;
}
interface Task {
    name: string;
    subtasks: string[];
    teammembers: string[];
    avatarColors: string[];
}

interface Skill {
    name: string;
    exp: string;
}

interface Project {
    name: string;
    progress: number;
    team: Employee[];
    skills: Skill[];
    tasks: Task[];
}

const sampleTeam: Employee[] = [
    {
        name: "Tim Kelly",
        role: "Senior Developer",
        workload: 6,
        capacity: 16,
        avatarColor: "red"
    }, {
        name: "Johnny Shoe",
        role: "Senior Developer",
        workload: 13,
        capacity: 16,
        avatarColor: "yellow",
    },
    {
        name: "Ben Vaughan",
        role: "Senior Developer",
        workload: 10,
        capacity: 16,
        avatarColor: "cyan"
    },
]

const sampleSkills: Skill[] = [
    {
        name: "Django",
        exp: "Advanced"
    }, {
        name: "React.js",
        exp: "Novice"
    },
    {
        name: "Python",
        exp: "Advanced"
    },
    {
        name: "MongoDB",
        exp: "Novice"
    },
]

const sampleTasks: Task[] = [
    {
        name: 'API Configuration',
        subtasks: ['Add CRUD Functions', 'Build Models', 'Finish Controller Scripts'],
        teammembers: ["Tim", "Ben", "John", "Karthik", "Zee", "Mani", "Robert"],
        avatarColors: ["grape", "red", "teal", "violet", "indigo", "cyan", "yellow", "orange"]
    },
    {
        name: 'Website Redesign',
        subtasks: ['Update Landing Page', 'Adjust Log-in Form'],
        teammembers: ["John", "Ben", "Tim", "Karthik", "Zee", "Mani", "Robert"],
        avatarColors: ["cyan", "yellow", "orange", "grape", "red", "teal", "violet", "indigo"]
    },
    {
        name: 'Database Restructure',
        subtasks: ['Study Existing Database', 'Find areas to improve'],
        teammembers: ["Zee", "Mani", "Robert", "Tim", "Ben", "John", "Karthik"],
        avatarColors: ["grape", "red", "teal", "violet", "cyan", "yellow", "orange", "indigo"]
    }
]


const ProjectPage = (props: { project: Project; }) => {
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
                            style={{ fontFamily: 'Greycliff CF, sans-serif' }}>{props.project.name}</Text>
                    </Title>
                    <Progress radius="lg" color="teal" size={25} value={props.project.progress} style={{ width: 200, color: "#64E8B7", marginRight: -60 }} />
                </Group>
            </div>
            <div style={{ width: "510", margin: 'auto', padding: "5px", marginLeft: -70 }}>
                <Grid columns={2} >
                    <Grid.Col span={1}>
                        <Group direction="column">
                            <ListSkills skills={props.project.skills} />
                            <ListTeam team={props.project.team} />
                        </Group>
                    </Grid.Col>
                    <Grid.Col span={1}>
                        <ListTasks tasks={props.project.tasks} />
                    </Grid.Col>
                </Grid>
            </div>

        </div>
    )
}

export default ProjectPage