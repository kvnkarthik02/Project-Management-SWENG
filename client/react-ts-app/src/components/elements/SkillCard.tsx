import React from 'react'
import { Group, Button, Text, Card, Progress } from '@mantine/core';
import { BiCodeAlt } from 'react-icons/bi';

const SkillCard = (props: {
    name: string;
    exp: number;
}) => {
    const colors = ["green", "lime", "yellow", "orange", "red"];
    const expLevel = Math.round((props.exp / 5) * 100)
    const levelColor = colors[(props.exp > 0) ? props.exp - 1 : 0];
    return (
        <div style={{ width: 340, margin: 'auto', padding: "2px" }}>
            <Card shadow="sm" p="lg" radius="md" withBorder={true} >
                <Group position="apart">
                    <Group position="left">
                        <Card.Section>
                            <Button size="xs" radius="xl" style={{ backgroundColor: "#64E8B7" }}>
                                <BiCodeAlt color="white" size={24} />
                            </Button>
                        </Card.Section>

                        <Text weight={500} size="xl">
                            {props.name}
                        </Text>
                    </Group>
                    <Progress radius="lg" color={levelColor} size={15} value={expLevel} style={{ width: 100, color: "#64E8B7", marginLeft: -100 }} />
                </Group>
            </Card>
        </div>
    )
}

export default SkillCard