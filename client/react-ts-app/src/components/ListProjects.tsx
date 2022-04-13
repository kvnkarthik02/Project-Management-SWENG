import ProjectCard from "./elements/ProejctCard";
import { Group, Button, Text, Title, Card, Modal, Code, ActionIcon, Select, Box, Avatar, TextInput, NumberInput, ScrollArea, Checkbox } from '@mantine/core';
import { useEffect, useState } from 'react';
import { FiPlus, FiTrash2 } from 'react-icons/fi';
import { useForm, formList } from '@mantine/form';
import { RichTextEditor } from '@mantine/rte';
// import axios from "axios";
import { AppService } from "../services/app.services";
import ProjectAddModal from "./newComponents/ProjectAddModal";



// const ListProjects = (props: { projectsList: Project[] }) => {
const ListProjects = () => {
  let [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    const getProjects = async () => {
      try {
        const response = await AppService.getProjects();
        setProjects(response);
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    };

    getProjects();
  }, [])

  return (
    <div>
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
              <ProjectAddModal />
            </Group>
          </div>
          <Group position="center" direction="column" spacing="xs">
            {projects.map((project) => <ProjectCard project={project} isAdmin={true} />)}
          </Group>
        </Card>
      </div >
    </div>
  )
}

export default ListProjects;