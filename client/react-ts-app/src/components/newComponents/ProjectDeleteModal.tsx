import React, { useState } from 'react'
import { Button, Text, Box, Group, Modal, ActionIcon } from '@mantine/core';
import { FiTrash2 } from 'react-icons/fi';

const ProjectDeleteModal = (props: {
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
    const handleDeleteProject = async () => {
        console.log(`Deleting project - ${props.project.projectName}`);
        // await AppService.deleteProject(props.project.projectId);
    }

    return (
        <div>
            <Modal
                opened={opened}
                onClose={() => { setOpened(false) }}
                size={400}
                title={props.project.projectName || "Delete Project"}
            >
                <Box sx={{ minWidth: 400 }} >
                    <Group mb="xs">
                        <div style={{ padding: "5px" }}>
                            <Box sx={{ maxWidth: 400, margin: 'auto' }} mx="auto">
                                <Text>Are you sure you want to delete this project ?</Text>
                                <Group position="center" sx={{ marginTop: '10px' }}>
                                    <Button variant="subtle" color="red" radius="lg" size="md"
                                        onClick={() => {
                                            handleDeleteProject();
                                        }}>
                                        Delete
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
                    // console.log(`DeleteRequest ${props.project.projectName} - ${props.project.projectId}`)
                    // handleDeleteProject();
                    setOpened(true)
                }}
            >
                <FiTrash2 size={24} />
            </ActionIcon>
        </div >
    )
}

export default ProjectDeleteModal