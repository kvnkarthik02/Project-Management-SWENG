import ProjectCard from "./elements/ProejctCard";
import { Group, Button, Text, Title, Card } from '@mantine/core';
import { FiPlus } from 'react-icons/fi';


// const container = {
//   boxShadow: "2px 2px 5px lightgrey",
//   backgroundColor: "#FDFDFD",
//   borderRadius: "10px",
//   margin: "10px",
//   padding: "16px",
// }
// const headerStyle = {
//   display: "flex",
//   justifyContent: 'center',
//   alignItems: 'center',
//   marginBottom: "20px"
// }
// const headingStyle = {
//   display: "inline-flex",
//   fontSize: "24px",
//   fontWeight: "bold",
//   width: "90%",
//   height: "32px",
//   alignItems: 'center',
// }
// const addStyle = {
//   display: "inline-flex",
//   borderRadius: "90px",
//   backgroundColor: "#64E8B7",
//   color: "white",
//   fontWeight: "bold",
//   width: "10%",
//   height: "32px",
//   justifyContent: 'center',
//   alignItems: 'center',
// }
// const bodyStyle = {
//   boxShadow: "2px 2px 5px lightgrey",
//   borderRadius: "10px",
//   padding: "16px"
// }
// const projectStyle = {
//   display: "inline-flex",
//   width: "90%",
// }


function ListProjects() {
  const images = [
    "https://images.unsplash.com/photo-1640622842223-e1e39f4bf627?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    "https://images.unsplash.com/photo-1638913970895-d3df59be1466?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80",
    "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
    "https://images.unsplash.com/photo-1640622844217-a51dd0f51d19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1552120476-9ee56c8611f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  ]

  const projectNames = [
    "Project I",
    "Project II",
    "Project II",
    "Project IV",
  ];

  const colors = ["teal", "orange", "grape", "yellow", "indigo", "dark", "gray", "red", "pink", "violet", "cyan", "lime", "green"];

  const randomDescription = "With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway";
  const badgeNames = ["Frontend", "Backend", "DevOps", "CI/CD"];

  return (

    <div style={{ width: 610, margin: 'auto', padding: "5px" }}>
      <Card shadow="sm" p="lg" radius="md" withBorder={true}>
        <div style={{ width: 510, margin: 'auto', padding: "5px" }}>
          <Group position="apart">
            <Title order={1}>
              <Text
                color="dark"
                inherit
                component="span"
                variant="text"
                // variant="gradient"
                // gradient={{ from: 'indigo', to: 'pink', deg: 45 }}
                size="xl"
                weight={700}
                style={{ fontFamily: 'Greycliff CF, sans-serif' }}>Projects</Text>
            </Title>
            <Button size="md" radius="xl" style={{ backgroundColor: "#64E8B7", width: 70 }}>
              <FiPlus color="white" size={24} strokeWidth={2.5} />
            </Button>
          </Group>
        </div>

        <Group position="center" direction="column" spacing="xs">
          <ProjectCard name={projectNames[0]} description={randomDescription} badgeName={badgeNames[0]} badgeColor={colors[0]} coverImgLink={images[0]} projectPageLink={""} />
          <ProjectCard name={projectNames[1]} description={randomDescription} badgeName={badgeNames[1]} badgeColor={colors[1]} coverImgLink={images[1]} projectPageLink={""} />
          <ProjectCard name={projectNames[2]} description={randomDescription} badgeName={badgeNames[2]} badgeColor={colors[2]} coverImgLink={images[2]} projectPageLink={""} />
          <ProjectCard name={projectNames[3]} description={randomDescription} badgeName={badgeNames[3]} badgeColor={colors[3]} coverImgLink={images[3]} projectPageLink={""} />
        </Group>

      </Card>

    </div >
  )
}

export default ListProjects;