import React, { useContext, useEffect, useState } from 'react'
import { Button, Text, Box, Group, Modal, ActionIcon } from '@mantine/core';
import { FiTrash2 } from 'react-icons/fi';
import { AppService } from '../../services/app.services';
import { OverlayContext } from '../../OverlayContext';


const MemberDeleteModal = (props: {
    memberId: string,
    name: string,
}) => {
    const [opened, setOpened] = useState(false);
    const [overlay, setOverlay] = useContext(OverlayContext);

    useEffect(() => {
        setOverlay(opened);
    }, [opened]);

    const handleDeleteMember = async () => {
        console.log(`Deleting Member - ${props.name}`);
        console.log(`Deleting Member - ${props.memberId}`);
        // await AppService.deleteMember(props.member.memberId);
        setOpened(false);
    }

    return (
        <div>
            <Modal
                opened={opened}
                onClose={() => { setOpened(false) }}
                size={400}
                title={`Remove ${props.name || "this member "} from the team`}
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