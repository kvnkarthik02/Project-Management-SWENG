import { Card, Image, Text, Badge, Button, Group, useMantineTheme } from '@mantine/core';



// const bodyStyle = {
//   display: "inline-flex",
//   width: "100%",
//   height: "70px",
//   boxShadow: "2px 2px 5px lightgrey",
//   borderRadius: "10px",
//   padding: "16px",
//   alignItems: 'center',
// }
// const capacityStyle = {
// }
// const capacityContainer = {
//   marginRight: "0",
//   marginLeft: "auto",
//   border: "1px solid #5D5D5D",
//   padding: "12px",
//   borderRadius: "15px",
//   color: "#5D5D5D",
// }
// const nameStyle = {
//   paddingLeft: '20px'
// }

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
const images = ["https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
    "https://images.unsplash.com/photo-1552120476-9ee56c8611f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1640622844217-a51dd0f51d19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1640622842223-e1e39f4bf627?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    "https://images.unsplash.com/photo-1638913970895-d3df59be1466?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80",
]

const colors = ["dark", "gray", "red", "pink", "grape", "violet", "indigo", "cyan", "teal", "green", "lime", "yellow", "orange"];
const randomDescription = "With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway"

function ProjectCard(project: Project) {

    // let initial = employee.name.substr(0, 1)
    // const randomColor = colors[Math.floor(Math.random() * colors.length)];
    // const secondaryColor = theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7];
    const secondaryColor = colors[0];


    return (
        <div style={{ width: 510, margin: 'auto', padding: "5px" }}>
            <Card shadow="sm" p="lg" withBorder={true} radius="md">
                <Card.Section component="a" href={project.projectPageLink} target="_blank">
                    <Image
                        src={project.coverImgLink}
                        height={240}
                        alt="Project Image"
                    />
                </Card.Section>

                <Group position="apart" style={{ marginBottom: 5, marginTop: 5 }}>
                    <Text size="xl" weight={500}>{project.name}</Text>
                    <Badge size="lg" color={project.badgeColor} variant="light">
                        {project.badgeName}
                    </Badge>
                </Group>

                <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
                    {project.description}
                </Text>

                <Button variant="light" color="cyan" fullWidth style={{ marginTop: 14 }}>
                    Know More
                </Button>
            </Card>
        </div>
    )
}


// function getRandomColor() {
//   var letters = '0123456789ABCDEF';
//   var color = '#';
//   for (var i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }

export default ProjectCard;
