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

const ListProjects = (props: { projects: Project[] }) => {

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
          {props.projects.map((project) => <ProjectCard project={project} />)}
        </Group>
      </Card>
    </div >
  )
}

export default ListProjects;