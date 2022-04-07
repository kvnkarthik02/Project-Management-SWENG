import { Card, Text, Badge, Button, Group, Spoiler } from '@mantine/core';

import parse from 'html-react-parser';
// import { useRef } from 'react';
// var dayjs = require('dayjs')
// interface Project {
//     name: string;
//     description: string;
//     badgeName: string;
//     badgeColor: string;
//     coverImgLink: string;
//     projectPageLink: string;
// }


const ProjectCard = (props: {
    name: string,
    description: string,
    deadline: string,
    badgeColor: string,
    // coverImgLink: string,
    // projectPageLink: string
}) => {
    const Lorem = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quae, nam architecto quia at excepturi animi?
                    Nostrum, quis dolores. Temporibus aspernatur soluta modi veritatis saepe est vitae aut suscipit accusamus! 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quae, nam architecto quia at excepturi animi?`;
    const PH_Name = "Project Name";
    const PH_Color = "teal";
    const PH_Deadline = "Due Date";
    return (
        <div>
            <div style={{ width: 510, margin: 'auto', padding: "5px" }}>
                <Card shadow="sm" p="lg" withBorder={true} radius="md">
                    <Group position="apart" style={{ marginBottom: 5, marginTop: 5 }}>
                        <Text size="xl" weight={500}>{props.name || PH_Name}</Text>
                        <Badge size="lg" color={props.badgeColor || PH_Color} variant="light">
                            {props.deadline || PH_Deadline}
                        </Badge>
                    </Group>

                    <Spoiler maxHeight={120} showLabel="Show more" hideLabel="Hide">
                        <Text size="sm" style={{ color: "dark", lineHeight: 1.5 }}>
                            {parse(props.description || Lorem)}
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
