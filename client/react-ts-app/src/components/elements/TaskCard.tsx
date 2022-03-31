import { Card, Text, Button, Group, Badge } from '@mantine/core';
import { useState } from 'react';
import { Collapse } from '@mantine/core';
import { AiOutlineDown } from 'react-icons/ai'
import { Avatar, AvatarsGroup } from '@mantine/core';
import SubTaskCard from './SubTaskCard'


interface Task {
    name: string;
    subtasks: string[];
    teamMembers: string[];
    avatarColors: string[];
}

const TaskCard = (props: {
    name: string,
    subtasks: string[],
    teamMembers: string[],
    avatarColors: string[],
    skills: string[],
}) => {
    // const TaskCard = () => {
    const ButtonStyles = {
        backgroundColor: "transparent",
        backgroundRepeat: "no-repeat",
        border: "none",
        cursor: "pointer",
        overflow: "hidden",
        outline: "none",
        padding: 5,
        marginLeft: -10
    };
    const teamCount = props.teamMembers.length;
    // const randomText = "Lorem ipsum dolor sit amet consectetur a";
    const [opened, setOpen] = useState(false);
    // const colors = ["grape", "red", "dark", "gray", "pink", , " "green", "lime", "cyan", "yellow", "orange"];

    return (
        <div style={{ width: 510, margin: 'auto', padding: "5px" }}>
            <Card shadow="sm" p="lg" withBorder={true} radius="md">
                <Group position="apart" >
                    <Group position="left" style={{ margin: 5 }}>
                        <Button style={ButtonStyles} variant="subtle" onClick={() => setOpen((o) => !o)}>
                            <AiOutlineDown style={{ fontSize: 25, color: 'grey', fontWeight: 700 }} />
                        </Button>
                        <Text size="xl" weight={600} style={{ marginLeft: -15 }}>{props.name}</Text>
                    </Group>
                    <AvatarsGroup limit={3} total={teamCount} size={45}>
                        {props.teamMembers.map((name, index) => <Avatar color={props.avatarColors[index]} radius="xl" >{name[0]}</Avatar>)}
                    </AvatarsGroup>
                </Group>
                <Group position="left" >
                    {props.skills.map(skill => <Badge size="lg" >{skill}</Badge>)}
                </Group>

                <Collapse in={opened} transitionDuration={400} transitionTimingFunction="linear" style={{ padding: "10px" }}>
                    {props.subtasks.map((subtask) => <SubTaskCard description={subtask} />)}
                </Collapse>
            </Card >
        </div >
    );
}

export default TaskCard