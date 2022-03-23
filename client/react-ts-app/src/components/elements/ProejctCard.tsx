import { Card, Image, Text, Badge, Button, Group, useMantineTheme } from '@mantine/core';

interface Project {
    name: string;
    description: string;
    badgeName: string;
    badgeColor: string;
    coverImgLink: string;
    projectPageLink: string;
    //   workload: number;
    //   capacity: number;
    //   avatarColor: string;
}

const ProjectCard = (props: { project: Project }) => {
    const secondaryColor = "dark";


    return (
        <div style={{ width: 510, margin: 'auto', padding: "5px" }}>
            <Card shadow="sm" p="lg" withBorder={true} radius="md">
                <Card.Section component="a" href={props.project.projectPageLink} target="_blank">
                    <Image
                        src={props.project.coverImgLink}
                        height={240}
                        alt="Project Image"
                    />
                </Card.Section>

                <Group position="apart" style={{ marginBottom: 5, marginTop: 5 }}>
                    <Text size="xl" weight={500}>{props.project.name}</Text>
                    <Badge size="lg" color={props.project.badgeColor} variant="light">
                        {props.project.badgeName}
                    </Badge>
                </Group>

                <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
                    {props.project.description}
                </Text>

                <Button variant="light" color="cyan" fullWidth style={{ marginTop: 14 }}>
                    Know More
                </Button>
            </Card>
        </div>
    )
}

export default ProjectCard;
