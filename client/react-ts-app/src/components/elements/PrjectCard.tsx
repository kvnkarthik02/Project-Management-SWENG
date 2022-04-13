import { Card, Text, Badge, Button, Group, Spoiler, Stack, List, AvatarsGroup, Avatar } from '@mantine/core';

import parse from 'html-react-parser';
import moment from 'moment';
import { Link } from 'react-router-dom';
import ProjectDeleteModal from '../newComponents/ProjectDeleteModal';
import ProjectEditModal from '../newComponents/ProjectEditModal';

const ProjectCard = (props: {
    project: {
        projectId: any,
        projectName: any,
        projectDescription: any,
        hasDeadline: any,
        deadline: any,
        isComplete: any,
        tasks: any[],
        team: any[]
    },
    isAdmin: boolean
}) => {
    const Lorem = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quae, nam architecto quia at excepturi animi?
                    Nostrum, quis dolores. Temporibus aspernatur soluta modi veritatis saepe est vitae aut suscipit accusamus! 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quae, nam architecto quia at excepturi animi?`;
    const PH_Name = "Project Name";
    const PH_Color = "teal";
    const PH_Deadline = "Due Date";
    const FormattedDate = (props.project.hasDeadline) ? (moment(props.project.deadline)).format('DD MMM YYYY') : "TBD"
    const colors = ["dark", "gray", "red", "pink", "grape", "violet", "indigo", "cyan", "teal", "green", "lime", "yellow", "orange"];

    return (
        <div>
            <div style={{ width: 510, margin: 'auto', padding: "5px" }}>
                <Card shadow="sm" p="lg" withBorder={true} radius="md">
                    <Group position="apart" style={{ marginBottom: 5, marginTop: 5 }}>
                        <Link to={`/project/${props.project.projectId}`}>
                            <Text size="xl" weight={500}>{props.project.projectName || PH_Name}</Text>
                        </Link>

                        <Group>
                            <Badge size="lg" color={PH_Color} variant="light">
                                {FormattedDate || PH_Deadline}
                            </Badge>
                            {props.isAdmin && (<Group>
                                <ProjectEditModal project={props.project} />
                                <ProjectDeleteModal project={props.project} />
                            </Group>)}
                        </Group>
                    </Group>

                    {(props.project.team.length > 0) && (
                        <Group position="apart" style={{ marginBottom: 5, marginTop: 5 }}>
                            <AvatarsGroup limit={3} total={props.project.team.length} size={45}>
                                {props.project.team.map((emp, index) => <Avatar color={colors[index]} radius="xl" >{emp.name[0]}</Avatar>)}
                            </AvatarsGroup>
                        </Group>
                    )}

                    <Spoiler maxHeight={120} showLabel="Show more" hideLabel="Hide">
                        <Text size="sm" style={{ color: "dark", lineHeight: 1.5 }}>
                            {parse(props.project.projectDescription || Lorem)}
                        </Text>
                        <Stack align="flex-start" >
                            {/* <div style={{ marginTop: "10px", marginBottom: "-30px", width: "100" }}> */}
                            <div style={{ marginTop: "10px", marginBottom: "-10px" }}>
                                <Text size="lg" weight={500} >
                                    Tasks
                                </Text>
                            </div>
                            <List
                                spacing={5}
                                size="sm"
                                type="ordered"
                                withPadding
                                sx={{
                                    marginLeft: "-10px"
                                }}
                            >
                                {props.project.tasks.length > 0 ? (props.project.tasks.map(task => (
                                    <List.Item >
                                        <strong>•</strong> {task}
                                    </List.Item>
                                ))) : (
                                    <Group position="center">
                                        <Text size="md" color="dimmed" align="center">
                                            No tasks here...
                                        </Text>
                                    </Group>
                                )}
                            </List>
                        </Stack>
                    </Spoiler>
                </Card>
            </div>
        </div>
    )
}

export default ProjectCard;