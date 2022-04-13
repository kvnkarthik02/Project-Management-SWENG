
import React from 'react'
import { useState } from 'react';
import { Modal, Button, Group, Code, ActionIcon, Text, Select, Box, Avatar, Card } from '@mantine/core';

// import { useState } from 'react';
import { FiPlus } from 'react-icons/fi';
// import { useInputState } from '@mantine/hooks';
import { TextInput, NumberInput } from '@mantine/core';
import { useForm, formList } from '@mantine/form';
import { FiTrash2 } from 'react-icons/fi'

const EditComponent = () => {
    const [opened, setOpened] = useState(false);

    const form = useForm({
        initialValues: {
            employees: formList([{
                name: '',
                email: '',
                role: '',
                workload: 0,
                capacity: 0,
                avatarColor: '',
            }])
        },
    });

    const colors = ["gray", "red", "pink", "grape", "violet", "indigo", "cyan", "teal", "green", "lime", "yellow", "orange"];

    const fields = form.values.employees.map((_, index) => (
        <div style={{ padding: "5px" }}>
            <Card shadow="sm" p="lg" radius="md" withBorder={true} >
                <Box sx={{ maxWidth: 500, margin: 'auto' }} >
                    <Group key={index} mt="xs">
                        <Avatar color={form.values.employees[index].avatarColor} size={45} radius='xl'>{form.values.employees[index].name[0]?.toUpperCase()}</Avatar>
                        <TextInput
                            placeholder="First Name"
                            required
                            sx={{ flex: 1 }}
                            {...form.getListInputProps('employees', index, 'name')}
                        />
                        <TextInput
                            placeholder="Email"
                            required
                            sx={{ flex: 1 }}
                            {...form.getListInputProps('employees', index, 'email')}
                        />
                        <ActionIcon
                            color="red"
                            variant="hover"
                            onClick={() => form.removeListItem('employees', index)}
                        >
                            <FiTrash2 size={24} />
                        </ActionIcon>
                    </Group>
                    <Group key={index} mt="xs">
                        <TextInput
                            placeholder="Role"
                            required
                            sx={{ flex: 1 }}
                            {...form.getListInputProps('employees', index, 'role')}
                        />
                        <NumberInput
                            placeholder='W'
                            required
                            sx={{ flex: 0.3 }}
                            // size="xs"
                            // label="Workload"
                            {...form.getListInputProps('employees', index, 'workload')}
                        />
                        <NumberInput
                            placeholder='C'
                            required
                            sx={{ flex: 0.3 }}
                            // size="xs"
                            // label="Capacity"
                            {...form.getListInputProps('employees', index, 'capacity')}
                        />
                        <Select
                            placeholder='Color'
                            required
                            sx={{ flex: 0.4 }}
                            data={colors}
                            {...form.getListInputProps('employees', index, 'avatarColor')}>
                        </Select>
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
                title="Edit Team"
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
                        <Button onClick={() => form.addListItem('employees', {
                            email: '',
                            name: '',
                            role: '',
                            workload: 0,
                            capacity: 0,
                            avatarColor: '',
                        })}>
                            Add employee
                        </Button>
                    </Group>


                    <Text size="md" weight={700} mt="md" color="cyan">
                        Form values:
                    </Text>
                    <Code block>{JSON.stringify(form.values, null, 2)}</Code>
                </Box>
            </Modal>

            <Group position="center">
                <Button size="md" radius="xl"
                    onClick={() => setOpened(true)}
                    style={{ backgroundColor: "#64E8B7", width: 70 }}>
                    <FiPlus color="white" size={24} strokeWidth={2.5} />
                </Button>
            </Group>
        </div >
    );


}


export default EditComponent
