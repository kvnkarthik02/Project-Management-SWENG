import React from 'react'
import { Group, Button, Text, Title, Card } from '@mantine/core';
import { FiPlus } from 'react-icons/fi';
import SkillCard from './elements/SkillCard'

import { useState } from 'react';
import { Modal, Code, ActionIcon, Select, Box, Avatar, TextInput, NumberInput } from '@mantine/core';

// import { useState } from 'react';
// import { useInputState } from '@mantine/hooks';
import { useForm, formList } from '@mantine/form';
import { FiTrash2 } from 'react-icons/fi'

interface Skill {
    name: string;
    exp: number;
}

const ListSkills = (props: { skills: Skill[]; }) => {
    const [opened, setOpened] = useState(false);
    const form = useForm({
        initialValues: {
            skills: formList([{
                name: '',
                exp: 0
            }])
        },
    });

    const fields = form.values.skills.map((_, index) => (
        <div style={{ padding: "5px" }}>
            <Card shadow="sm" p="lg" radius="md" withBorder={true} >
                <Box sx={{ maxWidth: 500, margin: 'auto' }} >
                    <Group key={index} mt="xs">
                        <TextInput
                            placeholder="Name"
                            required
                            sx={{ flex: 1 }}
                            {...form.getListInputProps('skills', index, 'name')}
                        />
                        <NumberInput
                            placeholder='Experience Level'
                            required
                            sx={{ flex: 0.5 }}
                            min={1}
                            max={5}
                            // size="xs"
                            // label="Workload"
                            {...form.getListInputProps('skills', index, 'exp')}
                        />
                        <ActionIcon
                            color="red"
                            variant="hover"
                            onClick={() => form.removeListItem('skills', index)}
                        >
                            <FiTrash2 size={24} />
                        </ActionIcon>
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
                size={550}
                title="Edit Skills"
            >
                <Box sx={{ minWidth: 500 }} >
                    {fields.length > 0 ? (
                        <Group mb="xs">
                        </Group>
                    ) : (
                        <Text color="dimmed" align="center">
                            No one here...
                        </Text>
                    )}

                    {fields}

                    <Group position="center" mt="md">
                        <Button
                            style={{ backgroundColor: "#64E8B7" }}
                            onClick={() => {
                                // setTeam(form.values.employees);
                                form.addListItem('skills', {
                                    name: '',
                                    exp: 0,
                                })
                            }}>
                            Add skills
                        </Button>
                    </Group>


                    {/* <Text size="md" weight={700} mt="md" color="cyan">
                        Form values:
                    </Text>
                    <Code block>{JSON.stringify(form.values, null, 2)}</Code> */}
                </Box>
            </Modal>
            <div style={{ width: 400, margin: 'auto', padding: "5px" }}>
                <Card shadow="sm" p="lg" radius="md" withBorder={true}>
                    <div style={{ width: 340, margin: 'auto', padding: "5px" }}>
                        <Group position="apart">
                            <Title order={1}>
                                <Text
                                    color="dark"
                                    inherit
                                    component="span"
                                    variant="text"
                                    // variant="gradient"
                                    // gradient={{ from: 'indigo', to: 'pink', deg: 45 }}
                                    size="lg"
                                    weight={500}
                                    style={{ fontFamily: 'Greycliff CF, sans-serif' }}>Skills</Text>
                            </Title>
                            <Button size="md" radius="xl"
                                onClick={() => setOpened(true)}
                                style={{ backgroundColor: "#64E8B7", width: 70 }}>
                                <FiPlus color="white" size={24} strokeWidth={2.5} />
                            </Button>
                        </Group>
                    </div>

                    <Group position="center" direction="column" spacing="xs">
                        {/* {props.skills.map((skill: Skill) => <SkillCard name={skill.name} exp={skill.exp} />)} */}
                        {form.values.skills.map((skill) => <SkillCard name={skill.name} exp={skill.exp} />)}
                    </Group>

                </Card>
            </div >
        </div>
    );
}

export default ListSkills