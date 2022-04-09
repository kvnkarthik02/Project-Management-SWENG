import React, { useEffect } from 'react'
import { Group, Button, Text, Title, Card } from '@mantine/core';
import EmployeeCard from './elements/EmployeeCard';
import { AppService } from "../services/app.services";

import { useState } from 'react';
import { Modal, Code, ActionIcon, Select, Box, Avatar, TextInput, NumberInput } from '@mantine/core';
import { FiPlus } from 'react-icons/fi';
import { useForm, formList } from '@mantine/form';
import { FiTrash2 } from 'react-icons/fi'

// const ListTeam = (props: { team: Employee[]; }) => {
// const ListTeam = (props: { team: Employee[]; }) => {
const ListTeam = () => {
    const [opened, setOpened] = useState(false);
    const [members, setMembers] = useState([{
        memberId: 0,
        firstName: "",
        lastName: "",
        projects: [],
        hoursAvailable: 0.0,
        hoursAllocated: 0.0
    }]);

    // const form = useForm({
    //     initialValues: {
    //         employees: formList([{
    //             name: '',
    //             email: '',
    //             role: '',
    //             workload: 0,
    //             capacity: 0,
    //             avatarColor: '',
    //         }])
    //     },
    // });

    const form = useForm({
        initialValues: {
            employees: formList([{
                id: 0,
                firstName: '',
                lastName: '',
                projects: [],
                hoursAvailable: 0.0,
                hoursAllocated: 0.0,
                avatarColor: '',
            }])
        },
    });

    useEffect(() => {
        handleMembers();
    }, [members.length]);

    const handleMembers = async () => {
        try {
            const result = await AppService.getMembers();
            console.log(result);
            result.then.map((member: any) => {
                const emp = {
                    id: member.id,
                    firstName: member.firstName,
                    lastName: member.lastName,
                    projects: [],
                    hoursAvailable: member.hoursAvailable,
                    hoursAllocated: member.hoursAllocated,
                    avatarColor: member.avatarColor,
                };
                form.addListItem('employees', emp);
                return emp;
            })
            setMembers(result);
        } catch (err) {
            console.log(err)
        }
    };

    const addMember = async (emp: {
        id: number,
        firstName: string;
        lastName: string;
        projects: string[];
        hoursAvailable: number;
        hoursAllocated: number;
    }) => {
        try {
            const data = {
                memberId: emp.id,
                firstName: emp.firstName,
                lastName: emp.lastName,
                projects: emp.projects,
                hoursAvailable: emp.hoursAvailable,
                hoursAllocated: emp.hoursAllocated
            }
            console.log(data)
            // AppService.makeMember(data);
        } catch (err) {
            console.log(err)
        }
    };

    const removeMember = async (id: number) => {
        try {
            console.log(id)
            AppService.deleteMember(id);
        } catch (err) {
            console.log(err)
        }
    }



    const colors = ["gray", "red", "pink", "grape", "violet", "indigo", "cyan", "teal", "green", "lime", "yellow", "orange"];

    const fields = form.values.employees.map((_, index) => (
        <div style={{ padding: "5px" }}>
            <Card shadow="sm" p="lg" radius="md" withBorder={true} >
                <Box sx={{ maxWidth: 500, margin: 'auto' }} >
                    <Group key={index} mt="xs">
                        <Avatar color={form.values.employees[index].avatarColor} size={45} radius='xl'>{form.values.employees[index].firstName[0]?.toUpperCase()}</Avatar>
                        <TextInput
                            placeholder="First Name"
                            required
                            sx={{ flex: 1 }}
                            {...form.getListInputProps('employees', index, 'firstName')}
                        />
                        {/* <TextInput
                            placeholder="Email"
                            required
                            sx={{ flex: 1 }}
                            {...form.getListInputProps('employees', index, 'email')}
                        />*/}
                        <TextInput
                            placeholder="Last Name"
                            required
                            sx={{ flex: 1 }}
                            {...form.getListInputProps('employees', index, 'lastName')}
                        />
                        <ActionIcon
                            color="red"
                            variant="hover"
                            onClick={() => {
                                const id = form.values.employees[index].id;
                                removeMember(id);
                                form.removeListItem('employees', index)
                            }}
                        >
                            <FiTrash2 size={24} />
                        </ActionIcon>
                    </Group>
                    <Group key={index} mt="xs">
                        {/* <TextInput
                            placeholder="Role"
                            required
                            sx={{ flex: 1 }}
                            {...form.getListInputProps('employees', index, 'role')}
                        /> */}
                        <NumberInput
                            placeholder='W'
                            required
                            sx={{ flex: 0.3 }}
                            min={0}
                            // size="xs"
                            label="Workload"
                            {...form.getListInputProps('employees', index, 'hoursAllocated')}
                        />
                        <NumberInput
                            placeholder='C'
                            required
                            sx={{ flex: 0.3 }}
                            min={0}
                            // size="xs"
                            label="Capacity"
                            {...form.getListInputProps('employees', index, 'hoursAvailable')}
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
                        <Button style={{ backgroundColor: "#64E8B7" }}
                            onClick={() => {
                                // setTeam(form.values.employees);
                                form.addListItem('employees', {
                                    id: 0,
                                    firstName: '',
                                    lastName: '',
                                    projects: [],
                                    hoursAvailable: 0.0,
                                    hoursAllocated: 0.0,
                                    avatarColor: '',
                                })
                            }}>
                            Add employee
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
                                    style={{ fontFamily: 'Greycliff CF, sans-serif' }}>Team</Text>
                            </Title>
                            <Group position="center">
                                <Button size="md" radius="xl"
                                    onClick={() => setOpened(true)}
                                    style={{ backgroundColor: "#64E8B7", width: 70 }}>
                                    <FiPlus color="white" size={24} strokeWidth={2.5} />
                                </Button>
                            </Group>
                        </Group>
                    </div>

                    <Group position="center" direction="column" spacing="xs">
                        {form.values.employees.map((member) => <EmployeeCard
                            name={`${member.firstName} ${member.lastName}`}
                            // email={member.email}
                            // role={member.role}
                            email={''} role={''}
                            workload={member.hoursAllocated}
                            capacity={member.hoursAvailable}
                            avatarColor={member.avatarColor}
                            projects={[]}
                            skills={[{
                                name: "undefined",
                                level: 1
                            }]} />)}
                    </Group>

                </Card>
            </div >

        </div >
    );


}

export default ListTeam