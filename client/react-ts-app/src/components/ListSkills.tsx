import React from 'react'
import { Group, Button, Text, Title, Card } from '@mantine/core';
import { FiPlus } from 'react-icons/fi';
import SkillCard from './elements/SkillCard'

interface Skill {
    name: string;
    exp: string;
}

const ListSkills = (props: { skills: Skill[]; }) => {
    return (
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
                        <Button size="md" radius="xl" style={{ backgroundColor: "#64E8B7", width: 70 }}>
                            <FiPlus color="white" size={24} strokeWidth={2.5} />
                        </Button>
                    </Group>
                </div>

                <Group position="center" direction="column" spacing="xs">
                    {props.skills.map((skill: Skill) => <SkillCard skill={skill} />)}
                </Group>

            </Card>
        </div >
    );
}

export default ListSkills