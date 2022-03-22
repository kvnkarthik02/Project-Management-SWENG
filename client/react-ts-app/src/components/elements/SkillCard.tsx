import React from 'react'
import { Group, Button, Text, Title, Card } from '@mantine/core';
import { FiPlus } from 'react-icons/fi';
import { BiCodeAlt } from 'react-icons/bi';

interface Skill {
    name: string;
    exp: string;

}

// const AvatarColors = ["dark", "gray", "red", "pink", "grape", "violet", "indigo", "cyan", "teal", "green", "lime", "yellow", "orange"];

// const sampleSkills: Skill[] = [
//     {
//         name: "Django",
//         exp: "Advanced"
//     }, {
//         name: "React.js",
//         exp: "Novice"
//     },
//     {
//         name: "Python",
//         exp: "Advanced"
//     },
//     {
//         name: "MongoDB",
//         exp: "Novice"
//     },
// ]


// const SkillCard = (props: { skills: Skill[]; }) => {
const SkillCard = (props: { skill: Skill }) => {
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
                            {props.skill.name}
                        </Text>
                    </Group>
                    <Text weight={200} size="md">
                        {props.skill.exp}
                    </Text>
                </Group>
            </Card>
        </div>
    )
}

export default SkillCard