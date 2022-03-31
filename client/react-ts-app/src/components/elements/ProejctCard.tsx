import { Card, Text, Badge, Button, Group, Spoiler } from '@mantine/core';

import parse from 'html-react-parser';
import { useRef } from 'react';

interface Project {
    name: string;
    description: string;
    badgeName: string;
    badgeColor: string;
    coverImgLink: string;
    projectPageLink: string;
}


const ProjectCard = (props: {
    name: string,
    description: string,
    badgeName: string,
    badgeColor: string,
    // coverImgLink: string,
    // projectPageLink: string
}) => {
    const secondaryColor = "dark";

    return (
        <div>
            <div style={{ width: 510, margin: 'auto', padding: "5px" }}>
                <Card shadow="sm" p="lg" withBorder={true} radius="md">
                    <Group position="apart" style={{ marginBottom: 5, marginTop: 5 }}>
                        <Text size="xl" weight={500}>{props.name}</Text>
                        <Badge size="lg" color={props.badgeColor} variant="light">
                            {props.badgeName}
                        </Badge>
                    </Group>

                    <Spoiler maxHeight={120} showLabel="Show more" hideLabel="Hide">
                        <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
                            {parse(props.description)}
                        </Text>
                    </Spoiler>
                    {/* 
                    <Button variant="light" color="cyan" fullWidth style={{ marginTop: 14 }}>
                        Know More
                    </Button> */}
                </Card>
            </div>
        </div>
    )
}

export default ProjectCard;
