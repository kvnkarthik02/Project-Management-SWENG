import React, { useState } from 'react'
import { Button, Text, Box, Group, Modal, ActionIcon } from '@mantine/core';
import { FiTrash2 } from 'react-icons/fi';
import { AppService } from '../../services/app.services';


const MemberDeleteModal = (props: {
    member: {
        memberId: string,
        firstName: string,
        lastName: string,
        hoursAllocated: number,
        hoursAvailable: number,
        projects: string[],
        skills: {
            name: String,
            level: Number
        }[]
    }
}) => {
    const [opened, setOpened] = useState(false);
    const handleDeleteMember = async () => {
        console.log(`Deleting Member - ${props.member.firstName}  ${props.member.lastName}`);
        // await AppService.deleteMember(props.member.memberId);
        setOpened(false);
    }

    return (
        <div>
            <Modal
                opened={opened}
                onClose={() => { setOpened(false) }}
                size={400}

                title={`${props.member.firstName}  ${props.member.lastName}` || "Remove Member"}
            >
                <Box sx={{ minWidth: 400 }} >
                    <Group mb="xs">
                        <div style={{ padding: "5px" }}>
                            <Box sx={{ maxWidth: 400, margin: 'auto' }} mx="auto">
                                <Text>Are you sure you want to remove this member ?</Text>
                                <Group position="center" sx={{ marginTop: '10px' }}>
                                    <Button variant="subtle" color="red" radius="lg" size="md"
                                        onClick={() => {
                                            handleDeleteMember();
                                        }}>
                                        Remove
                                    </Button>
                                    <Button variant="subtle" color="gray" radius="lg" size="md"
                                        onClick={() => {
                                            setOpened(false);
                                        }}>
                                        Cancel
                                    </Button>
                                </Group>
                            </Box>
                        </div>
                    </Group>
                </Box>
            </Modal>
            <ActionIcon
                color="red"
                variant="hover"
                onClick={() => {
                    setOpened(true)
                }}
            >
                <FiTrash2 size={24} />
            </ActionIcon>
        </div>
    )
}

export default MemberDeleteModal