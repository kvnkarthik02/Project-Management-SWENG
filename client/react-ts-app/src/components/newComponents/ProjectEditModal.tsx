import React, { useState } from 'react'
import moment from 'moment';
import { Card, Button, Text, Stack, Box, TextInput, Checkbox, Group, Modal, Title, ScrollArea, ActionIcon, Code } from '@mantine/core';
import { formList, useForm } from '@mantine/form';
import { DatePicker } from '@mantine/dates';
import { FiEdit3, FiPlus, FiTrash2 } from 'react-icons/fi';
import RichTextEditor from '@mantine/rte';
import { AppService } from '../../services/app.services';

const ProjectEditModal = (props: {
    project: {
        projectId: any,
        projectName: any,
        projectDescription: any,
        hasDeadline: any,
        deadline: any,
        isComplete: any,
        tasks: any[],
    }
}) => {

    const [opened, setOpened] = useState(false);
    const [date, setDate] = useState<Date | null>();

    const form = useForm({
        initialValues: {
            projectName: props.project.projectName,
            projectDescription: props.project.projectDescription,
            hasDeadline: props.project.hasDeadline,
            deadline: props.project.deadline,
            isComplete: props.project.isComplete,
            tasks: props.project.tasks,
        },
    });

    const TodoInitialTasks = props.project.tasks.map((task) => { return { name: task } });
    // console.log(TodoInitialTasks)
    const TodoForm = useForm({
        initialValues: {
            tasks: formList(TodoInitialTasks),
        },
    })



    const TodoFields = TodoForm.values.tasks.map((_, index) => (
        <Group key={index} mt="xs">
            <TextInput
                placeholder="Task Description"
                required
                sx={{ flex: 1 }}
                {...TodoForm.getListInputProps('tasks', index, 'name')}
            />
            <ActionIcon
                color="red"
                variant="hover"
                onClick={() => TodoForm.removeListItem('tasks', index)}
            >
                <FiTrash2 size={24} />
            </ActionIcon>
        </Group>
    ));

    const handleEditProject = async () => {
        console.log(`Edit ${props.project.projectName} - ${form.values.projectName}- ${props.project.projectId} `)
        console.log(form.values);
        // await AppService.editProject(form.values, props.project.projectId);
    }

    return (
        <div>
            <Modal
                opened={opened}
                onClose={() => { setOpened(false) }}
                size={650}
                title="Edit Project"
            >
                <Box sx={{ minWidth: 700 }} >
                    <Group mb="xs">
                        <div style={{ padding: "5px" }}>
                            <Box sx={{ maxWidth: 600, margin: 'auto' }} mx="auto">
                                <form onSubmit={form.onSubmit((values) => {
                                    var formattedDate = (moment(date)).format('DD MMM , YYYY');
                                    form.setFieldValue('deadline', formattedDate);

                                    var hasDeadline = (values.deadline.toString() === null || values.deadline === undefined || (values.deadline.match(/^ *$/) !== null));
                                    form.setFieldValue('hasDeadline', hasDeadline);

                                    var tasks = TodoForm.values.tasks.map((task) => task.name);
                                    form.setFieldValue('tasks', tasks);

                                    setOpened(false);
                                    handleEditProject();
                                    // handleMakeProject();
                                    // console.log(form.values);
                                })}>
                                    <Group mt="xs">
                                        <TextInput
                                            sx={{ flex: 1 }}
                                            required
                                            label="Project Name"
                                            placeholder="Project Name"
                                            {...form.getInputProps('projectName')}
                                        />
                                        <DatePicker
                                            sx={{ flex: 0.75 }}
                                            required
                                            allowFreeInput
                                            label="Event date"
                                            placeholder={props.project.deadline}
                                            value={date}
                                            onChange={setDate}
                                            dateParser={(dateString) => {
                                                const date = new Date(Date.parse(dateString));
                                                // console.log(date.toString());
                                                setDate(date);
                                                return date;
                                            }}
                                        />
                                    </Group>

                                    <Stack>
                                        <Text sx={{
                                            'display': 'inline-block',
                                            'marginTop': '10px',
                                            'marginBottom': '-20px',
                                            'fontSize': '14px',
                                            'fontWeight': '500',
                                            'color': '#212529',
                                            'wordBreak': "break-word",
                                        }}>Project Description</Text>
                                        <ScrollArea sx={{ height: 250 }} scrollbarSize={8} scrollHideDelay={0} offsetScrollbars={true}>
                                            <Group mt="xs" >
                                                <RichTextEditor
                                                    sx={{ flex: 1, minHeight: 240 }}
                                                    {...form.getInputProps('projectDescription')}
                                                />
                                            </Group>

                                        </ScrollArea>
                                        <Box sx={{ minWidth: 600 }} mx="auto">
                                            {TodoFields.length > 0 ? (
                                                <Group mb="sm">
                                                    <Text weight={500} size="md" sx={{ flex: 1 }}>
                                                        Tasks
                                                    </Text>
                                                    <Group position="right" mt="md">
                                                        <Button size="md" radius="lg"
                                                            onClick={() => TodoForm.addListItem('tasks', { name: '' })}
                                                            style={{ backgroundColor: "#64E8B7", width: 70, height: 25 }}>
                                                            <FiPlus color="white" size={18} strokeWidth={2.5} />
                                                        </Button>
                                                    </Group>
                                                </Group>
                                            ) : (
                                                <Group position="center">
                                                    <Text color="dimmed" align="center">
                                                        No tasks here...
                                                    </Text>
                                                    <Button size="md" radius="lg"
                                                        onClick={() => TodoForm.addListItem('tasks', { name: '' })}
                                                        style={{ backgroundColor: "#64E8B7", width: 70, height: 25 }}>
                                                        <FiPlus color="white" size={18} strokeWidth={1.5} />
                                                    </Button>
                                                </Group>
                                            )}

                                            {TodoFields}


                                        </Box>
                                        <Checkbox
                                            sx={{
                                                'marginTop': '-30px',
                                            }}
                                            mt="md"
                                            label="is complete"
                                            {...form.getInputProps('isComplete', { type: 'checkbox' })}
                                        />
                                    </Stack>

                                    <Group position="center" mt="md">
                                        <Button
                                            size="lg"
                                            style={{ backgroundColor: "#64E8B7" }}
                                            type="submit">
                                            Save Changes
                                        </Button>
                                    </Group>
                                </form>
                            </Box>
                        </div>
                    </Group>
                    {/* <Text size="sm" weight={500} mt="md">
                        Form values:
                    </Text>
                    <Code block>{JSON.stringify(form.values, null, 2)}</Code> */}
                </Box>
            </Modal>
            <ActionIcon
                color="cyan"
                variant="hover"
                onClick={() => {
                    // const id = form.values.projects[index].id;
                    // deleteProject(id);
                    // form.removeListItem('projects', index)
                    setOpened(true)
                    // console.log(`Edit ${props.project.projectName} - ${props.project.projectId} `)
                    // console.log(props.project.tasks.map((task: any) => { return { name: task } }));
                }}
            >
                <FiEdit3 size={24} />
            </ActionIcon>
        </div >
    )
}

export default ProjectEditModal