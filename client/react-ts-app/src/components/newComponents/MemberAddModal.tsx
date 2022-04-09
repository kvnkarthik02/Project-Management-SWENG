import React, { useState } from 'react'
import { Card, Button, Text, Stack, Box, TextInput, Checkbox, Group, Modal, Title, ScrollArea, ActionIcon, Code, Avatar, NumberInput, Select, MultiSelect } from '@mantine/core';
import { formList, useForm } from '@mantine/form';
import { FiPlus, FiTrash2 } from 'react-icons/fi';
import { AppService } from '../../services/app.services';

const MemberAddModal = () => {
    // <Text sx={{
    //         'display': 'inline-block',
    //         'marginTop': '10px',
    //         'marginBottom': '-20px',
    //         'fontSize': '14px',
    //         'fontWeight': '500',
    //         'color': '#212529',
    //         'wordBreak': "break-word",
    //     }}>Project Description</Text>
    const [opened, setOpened] = useState(false);
    const [projects, setProjects] = useState(['Sample Project']);
    const colors = ["dark", "gray", "red", "pink", "grape", "violet", "indigo", "cyan", "teal", "green", "lime", "yellow", "orange"];

    const form = useForm({
        initialValues: {
            memberId: '',
            firstName: '',
            lastName: '',
            email: '',
            role: '',
            avatarColor: '',
            hoursAvailable: 0,
            hoursAllocated: 0,
            projects: [''],
            skills: [{}]
        },
    });

    // use this for skills
    const SkillsForm = useForm({
        initialValues: {
            skills: formList([{ name: "", level: 0 }]),
        },
    })

    const SkillFields = SkillsForm.values.skills.map((_, index) => (
        <Group key={index} mt="xs">
            <TextInput
                placeholder="Skill Name"
                required
                sx={{ flex: 1 }}
                {...SkillsForm.getListInputProps('skills', index, 'name')}
            />
            <NumberInput
                // label="Exp. Level"
                placeholder='Level'
                required
                sx={{ flex: 0.3 }}
                min={1}
                max={5}
                // size="xs"
                {...SkillsForm.getListInputProps('skills', index, 'level')}
            />
            <ActionIcon
                color="red"
                variant="hover"
                onClick={() => SkillsForm.removeListItem('skills', index)}
            >
                <FiTrash2 size={24} />
            </ActionIcon>
        </Group>
    ));

    const handleMakeMember = async () => {
        console.log(`Button Pressed`);
        console.log(`Members`);
        console.log(form.values);
        // await AppService.makeProjects(form.values);
        // console.log(data);
    }

    return (
        <div>
            <Modal
                opened={opened}
                onClose={() => { setOpened(false) }}
                size={650}
                title="Add Member"
            >
                <Box sx={{ minWidth: 700 }} >
                    <Group mb="xs">
                        <div style={{ padding: "5px" }}>
                            <Box sx={{ maxWidth: 600, margin: 'auto' }} mx="auto">
                                <form onSubmit={form.onSubmit((values) => {
                                    var skills = SkillsForm.values.skills.map((skill) => { return { name: skill.name, level: skill.level } });
                                    form.setFieldValue('skills', skills);
                                    console.log("skills")
                                    console.log(skills)
                                    console.log("SkillsForm.values")
                                    console.log(SkillsForm.values.skills)
                                    setOpened(false);
                                    handleMakeMember();
                                    // console.log(form.values);
                                })}>
                                    <Group mt="xs">
                                        <Avatar color={form.values.avatarColor} size={45} radius='xl'>{form.values.firstName[0]?.toUpperCase()}</Avatar>
                                        <TextInput
                                            label="First Name"
                                            placeholder="First Name"
                                            required
                                            sx={{ flex: 1 }}
                                            {...form.getInputProps('firstName')}
                                        />
                                        <TextInput
                                            label="Last Name"
                                            placeholder="Last Name"
                                            required
                                            sx={{ flex: 1 }}
                                            {...form.getInputProps('lastName')}
                                        />

                                    </Group>


                                    <Group mt="xs">
                                        <TextInput
                                            label="Role"
                                            placeholder="Role"
                                            required
                                            sx={{ flex: 1 }}
                                            {...form.getInputProps('role')}
                                        />
                                        <TextInput
                                            label="Email"
                                            placeholder="Email"
                                            required
                                            sx={{ flex: 1 }}
                                            {...form.getInputProps('email')}
                                        />
                                    </Group>


                                    <Group mt="xs">

                                        <NumberInput
                                            label="Workload"
                                            placeholder='W'
                                            required
                                            sx={{ flex: 0.3 }}
                                            min={1}
                                            {...form.getInputProps('hoursAllocated')}
                                        />
                                        <NumberInput
                                            label="Capacity"
                                            placeholder='C'
                                            required
                                            sx={{ flex: 0.3 }}
                                            min={1}
                                            // size="xs"
                                            {...form.getInputProps('hoursAvailable')}
                                        />
                                        <Select
                                            label='Avatar'
                                            placeholder='Color'
                                            required
                                            sx={{ flex: 0.4 }}
                                            data={colors}
                                            {...form.getInputProps('avatarColor')}>
                                        </Select>
                                    </Group>
                                    <Group mt="xs">
                                        <MultiSelect
                                            sx={{ flex: 1 }}
                                            {...form.getInputProps('projects')}
                                            data={projects}
                                            label="Projects"
                                            placeholder="Projects"
                                            searchable
                                            creatable
                                            getCreateLabel={(query) => `+ Create ${query}`}
                                            onCreate={(query) => setProjects((current) => [...current, query])}
                                        />
                                    </Group>

                                    <Stack>


                                        <Box sx={{ minWidth: 600 }} mx="auto">
                                            {SkillFields.length > 0 ? (
                                                <Group mb="sm">
                                                    <Text weight={500} size="md" sx={{ flex: 1 }}>
                                                        Skills
                                                    </Text>
                                                    <Group position="right" mt="md">
                                                        <Button size="md" radius="lg"
                                                            onClick={() => SkillsForm.addListItem('skills', { name: '', level: 1 })}
                                                            style={{ backgroundColor: "#64E8B7", width: 70, height: 25 }}>
                                                            <FiPlus color="white" size={18} strokeWidth={2.5} />
                                                        </Button>
                                                    </Group>
                                                </Group>
                                            ) : (
                                                <Group position="center">
                                                    <Text color="dimmed" align="center">
                                                        No skills added yet ...
                                                    </Text>
                                                    <Button size="md" radius="lg"
                                                        onClick={() => SkillsForm.addListItem('skills', { name: '', level: 1 })}
                                                        style={{ backgroundColor: "#64E8B7", width: 70, height: 25 }}>
                                                        <FiPlus color="white" size={18} strokeWidth={1.5} />
                                                    </Button>
                                                </Group>
                                            )}

                                            {SkillFields}


                                        </Box>

                                    </Stack>

                                    <Group position="center" mt="md">
                                        <Button
                                            size="lg"
                                            style={{ backgroundColor: "#64E8B7" }}
                                            type="submit">
                                            Add Project
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
            <Button size="md" radius="xl"
                onClick={() => setOpened(true)}
                style={{ backgroundColor: "#64E8B7", width: 70 }}>
                <FiPlus color="white" size={24} strokeWidth={2.5} />
            </Button>
        </div >
    )
}

export default MemberAddModal