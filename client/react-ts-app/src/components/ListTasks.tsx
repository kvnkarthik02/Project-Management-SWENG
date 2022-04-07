import React, { forwardRef } from 'react'
// import PropTypes from 'prop-types'
import TaskCard from './elements/TaskCard';
import { Group, Button, Text, Title, Card, Modal, Code, ActionIcon, Box, TextInput, ScrollArea, MultiSelect, CloseButton, MultiSelectValueProps, SelectItemProps, Avatar } from '@mantine/core';
import { useState } from 'react';
import { FiPlus, FiTrash2 } from 'react-icons/fi';
import { useForm, formList } from '@mantine/form';
// import { RichTextEditor } from '@mantine/rte';
import { AppService } from "../services/app.services";

interface Task {
    name: string;
    subtasks: string[];
    teamMembers: string[];
    avatarColors: string[];
}

// {
//     taskId: String,
//     projectId: String,
//     taskName: String,
//     taskDescription: String,
//     hasDeadline: Boolean,
//     deadline: Date,
//     isComplete: Boolean,
//     skill: String,
//     skillLevel: String,
//     allocatedTime: Number,
//     employeeAssigned: String
// }
// const AvatarColors = ["dark", "gray", "red", "pink", "grape", "violet", "indigo", "cyan", "teal", "green", "lime", "yellow", "orange"];


const ListTasks = (props: { tasks: Task[]; }) => {
    const initialDescription =
        '<p> <i>Please enter other details before entering the description</i> Your initial <b>html value</b> or an empty string to init editor without value</p>';
    // const [description, setDescription] = useState(initialDescription);

    const [opened, setOpened] = useState(false);
    const [skills, setSkills] = useState(['react']);
    const [subtasks, setSubtasks] = useState(['todo']);

    const form = useForm({
        initialValues: {
            tasks: formList([{
                name: '',
                subtasks: [],
                skillsRequired: [],
                teamMembers: [],
            }])
        },
    });


    const colors = ["gray", "red", "pink", "grape", "violet", "indigo", "cyan", "teal", "green", "lime", "yellow", "orange"];

    const sampleTeam = [
        {
            name: "Tim Kelly",
            email: "tim@gmail.com",
            role: "Backend Developer",
            workload: 6,
            capacity: 16,
            avatarColor: "red"
        }, {
            name: "John Kommala",
            email: "jshoe@gmail.com",
            role: "Frontend Developer",
            workload: 13,
            capacity: 16,
            avatarColor: "yellow",
        }, {
            name: "Karthik",
            email: "jshoe@gmail.com",
            role: "Backend Developer",
            workload: 13,
            capacity: 16,
            avatarColor: "yellow",
        }, {
            name: "Zemyna Kaite",
            email: "jshoe@gmail.com",
            role: "Frontend Developer",
            workload: 13,
            capacity: 16,
            avatarColor: "yellow",
        }, {
            name: "Manikanta Naga",
            email: "jshoe@gmail.com",
            role: "Backend Developer",
            workload: 13,
            capacity: 16,
            avatarColor: "yellow",
        },
        {
            name: "Ben Vaughan",
            email: "ben@gmail.com",
            role: "Frontend Developer",
            workload: 10,
            capacity: 16,
            avatarColor: "cyan"
        },
        {
            name: "Robert Gaynor",
            email: "ben@gmail.com",
            role: "Frontend Developer",
            workload: 10,
            capacity: 16,
            avatarColor: "cyan"
        },
    ]

    const data = sampleTeam.map((emp) => { return { value: emp.name.split(" ")[0], label: emp.name.split(" ")[0], group: emp.role } });



    const fields = form.values.tasks.map((_, index) => (
        <div style={{ padding: "5px" }}>
            <Card shadow="sm" p="lg" radius="md" withBorder={true} >
                <Box sx={{ maxWidth: 700, margin: 'auto' }} >
                    <Group key={index} mt="xs">
                        <TextInput
                            placeholder="Task Name"
                            required
                            sx={{ flex: 1 }}
                            {...form.getListInputProps('tasks', index, 'name')}
                        />
                        <ActionIcon
                            color="red"
                            variant="hover"
                            onClick={() => form.removeListItem('tasks', index)}
                        >
                            <FiTrash2 size={24} />
                        </ActionIcon>
                    </Group>
                    <Group key={index} mt="xs">
                        <MultiSelect
                            sx={{ flex: 1 }}
                            {...form.getListInputProps('tasks', index, 'skillsRequired')}
                            data={skills}
                            placeholder="Required Sklills"
                            searchable
                            creatable
                            getCreateLabel={(query) => `+ Create ${query}`}
                            onCreate={(query) => setSkills((current) => [...current, query])}
                        />
                        <MultiSelect
                            sx={{ flex: 1 }}
                            placeholder="Employees"
                            searchable
                            data={data}
                            {...form.getListInputProps('tasks', index, 'teamMembers')}
                        />
                    </Group>
                    <Group key={index} mt="xs">
                        <MultiSelect
                            sx={{ flex: 1 }}
                            {...form.getListInputProps('tasks', index, 'subtasks')}
                            data={subtasks}
                            placeholder="Sub Tasks"
                            searchable
                            creatable
                            getCreateLabel={(query) => `+ Create ${query}`}
                            onCreate={(query) => setSubtasks((current) => [...current, query])}
                        />
                    </Group>
                </Box>
            </Card>
        </div>
    ));

    return (
        <div>
            <Modal
                opened={opened}
                onClose={() => setOpened(false)}
                size={650}
                title="Edit Tasks"
            >
                <Box sx={{ minWidth: 500 }} >
                    {fields.length > 0 ? (
                        <Group mb="xs">
                        </Group>
                    ) : (
                        <Text color="dimmed" align="center">
                            No Tasks here...
                        </Text>
                    )}

                    {fields}

                    <Group position="center" mt="md">
                        <Button onClick={() => {
                            form.addListItem('tasks', {
                                name: '',
                                subtasks: [],
                                skillsRequired: [],
                                teamMembers: [],
                            })
                        }}>
                            Add Task
                        </Button>
                    </Group>
                    {/* <Text size="md" weight={700} mt="md" color="cyan">
                        Form values:
                    </Text>
                    <Code block>{JSON.stringify(form.values, null, 2)}</Code> */}

                </Box>
            </Modal>
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
                            <Button size="md" radius="xl"
                                onClick={() => setOpened(true)}
                                style={{ backgroundColor: "#64E8B7", width: 70 }}>
                                <FiPlus color="white" size={24} strokeWidth={2.5} />
                            </Button>
                        </Group>
                    </div>
                    <Group position="center" direction="column" spacing="xs">
                        {/* {props.tasks.map((task: Task) => <TaskCard name={task.name} subtasks={task.subtasks} teamMembers={task.teamMembers} avatarColors={colors} />)} */}
                        {form.values.tasks.map((task) => <TaskCard name={task.name} subtasks={task.subtasks} teamMembers={task.teamMembers} avatarColors={colors} skills={task.skillsRequired} />)}
                    </Group>
                </Card>
            </div >
        </div>

    )
}

export default ListTasks