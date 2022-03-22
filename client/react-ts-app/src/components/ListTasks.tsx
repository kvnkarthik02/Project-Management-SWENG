import React from 'react'
// import PropTypes from 'prop-types'
import { Group, Button, Text, Title, Card } from '@mantine/core';
import TaskCard from './elements/TaskCard';
import { FiPlus } from 'react-icons/fi';

interface Task {
    name: string;
    subtasks: string[];
    teammembers: string[];
    avatarColors: string[];
}
// const AvatarColors = ["dark", "gray", "red", "pink", "grape", "violet", "indigo", "cyan", "teal", "green", "lime", "yellow", "orange"];

const ListTasks = (props: { tasks: Task[]; }) => {
    return (
        <div style={{ width: 580, margin: 'auto', padding: "5px" }}>
            <Card shadow="sm" p="lg" radius="md" withBorder={true}>
                <div style={{ width: 510, margin: 'auto', padding: "5px" }}>
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
                                style={{ fontFamily: 'Greycliff CF, sans-serif' }}>Tasks</Text>
                        </Title>
                        <Button size="md" radius="xl" style={{ backgroundColor: "#64E8B7", width: 70 }}>
                            <FiPlus color="white" size={24} strokeWidth={2.5} />
                        </Button>
                    </Group>
                </div>
                <Group position="center" direction="column" spacing="xs">
                    {props.tasks.map((task: Task) => <TaskCard task={task} />)}
                </Group>
            </Card>
        </div >
    )
}

export default ListTasks