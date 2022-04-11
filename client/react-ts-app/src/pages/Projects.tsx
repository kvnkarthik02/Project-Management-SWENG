import React, { useEffect, useState } from 'react';
import { AppService } from '../services/app.services';
import { Card, Title, Stack, Box, Text, Group, List, Code } from '@mantine/core';
import ProjectAddModal from '../components/newComponents/ProjectAddModal';
import ProjectCard from '../components/elements/ProejctCard';
import ListProjects from '../components/ListProjects';
import MemberAddModal from '../components/newComponents/MemberAddModal';
import EmployeeCard from '../components/elements/EmployeeCard';
import MemberDeleteModal from '../components/newComponents/MemberDeleteModal';

function Projects() {
    let [projects, setProjects] = useState<any[]>([]);
    let [members, setMembers] = useState<any[]>([]);
    const isAdmin = true;

    useEffect(() => {
        const getProjects = async () => {
            try {
                const projectsResponse = await AppService.getProjects();
                // setProjects(projectsResponse);

                const membersResponse = await AppService.getMembers();
                setMembers(membersResponse);

                console.log(membersResponse);

            } catch (err) {
                console.log(err);
            }
        };

        getProjects();
    }, [])

    // memberId: String,
    // firstName: String,
    // lastName: String,
    // email: String,
    // role: String,
    // avatarColor: String,
    // hoursAvailable: Number,
    // hoursAllocated: Number,
    // skills: [SkillSchema],
    // projects: [String]

    //     <List>
    // {
    //     projects? projects.map(project => (
    //         <List.Item>
    //             <div style={{
    //                 margin: '5px',
    //                 padding: '5px',
    //             }}>
    //                 {/* <ProjectCard project={project} isAdmin={isAdmin} /> */}
    //             </div>
    //         </List.Item>
    //     ))
    //                                 : < li > Loading...</li >}
    //                         </List >
    return (
        // <ListProjects />

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
                                style={{ fontFamily: 'Greycliff CF, sans-serif' }}>Team</Text>
                        </Title>
                        {/* {props.isAdmin && (<ProjectAddModal />)} */}
                        {isAdmin && (<MemberAddModal />)}
                    </Group>
                    <Stack sx={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                        <Box sx={{ maxWidth: 600 }} mx="auto">
                            <List>
                                {members ? members.map(member => (
                                    <List.Item>
                                        <div style={{
                                            margin: '5px',
                                            padding: '5px',
                                        }}>
                                            <Card shadow="sm" p="lg" withBorder={true} onClick={() => { console.log(member) }}>
                                                <EmployeeCard member={member} isAdmin={isAdmin} />
                                                <Code block >
                                                    <h1>FirstName: <strong >{member.firstName}</strong></h1>
                                                    <h1>LastName: <strong >{member.lastName}</strong></h1>
                                                    <h1>Role: <strong >{member.role || 'Newly Added JOHN'}</strong></h1>
                                                    <h1>Email: <strong >{member.email || 'Newly Added JOHN'}</strong></h1>
                                                    <h1>Avatar Color: <strong >{member.avatarColor || 'Newly Added JOHN'}</strong></h1>
                                                    <p>ID: <i>{member.memberId}</i></p>
                                                    <p>hoursAvailable: <b>{member.hoursAvailable}</b></p>
                                                    <p>hoursAllocated: <b>{member.hoursAllocated}</b></p>
                                                    <p>projects: <b>{JSON.stringify(member.projects, null, 2)}</b></p>
                                                    <p>skills:
                                                        <p>{member.skills.map((skill: any) => (<div><b>{skill.name} - {skill.level}</b> - <i>{skill._id}</i></div>))}</p>
                                                    </p>
                                                </Code>

                                            </Card>
                                            {/* <ProjectCard project={project} isAdmin={isAdmin} /> */}
                                        </div>
                                    </List.Item>
                                ))
                                    : <li>Loading...</li>
                                }
                            </List>
                        </Box>

                    </Stack>
                </div >

            </Card >
        </div >

    )
}

export default Projects;