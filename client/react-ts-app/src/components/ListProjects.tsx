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

  // const initialDescription =
  //   '<p> <i>Please enter other details before entering the description</i> Your initial <b>html value</b> or an empty string to init editor without value</p>';

  // useEffect(() => {
  //   handleProjects();

  // }, [projects.length]);

  // const colors = ["gray", "red", "pink", "grape", "violet", "indigo", "cyan", "teal", "green", "lime", "yellow", "orange"];

  // const fields = form.values.projects.map((_, index) => (
  //   <div style={{ padding: "5px" }}>
  //     <Card shadow="sm" p="lg" radius="md" withBorder={true} >
  //       <Box sx={{ maxWidth: 700, margin: 'auto' }} >
  //         <Group key={index} mt="xs">
  //           <Checkbox label=""  {...form.getListInputProps('projects', index, 'isComplete')} />
  //           <Avatar color={form.values.projects[index].badgeColor} size={40} radius='xl' src='' >
  //             <></>
  //           </Avatar>
  //           <TextInput
  //             placeholder="Project Name"
  //             required
  //             sx={{ flex: 1 }}
  //             {...form.getListInputProps('projects', index, 'name')}
  //           />
  //           <TextInput
  //             placeholder="Due Date"
  //             required
  //             sx={{ flex: 1 }}
  //             {...form.getListInputProps('projects', index, 'deadline')}
  //           />
  //           {/* <DatePicker
  //             allowFreeInput
  //             dateParser={(dateString) => new Date(Date.parse(dateString))}
  //             placeholder="Deadline"
  //             required
  //             sx={{ flex: 1 }}
  //           // onChange={form.setListItem('projects', index, 'badgeName', )}
  //           // {...form.getListInputProps('projects', index, 'badgeName')} />
  //           // {...form.setListItem('projects', index, 'badgeName')} 
  //           /> */}
  //           <Select
  //             placeholder='Color'
  //             required
  //             sx={{ flex: 0.5 }}
  //             data={colors}
  //             {...form.getListInputProps('projects', index, 'badgeColor')}>
  //           </Select>
  //           <ActionIcon
  //             color="red"
  //             variant="hover"
  //             onClick={() => {
  //               const id = form.values.projects[index].id;
  //               deleteProject(id);
  //               form.removeListItem('projects', index)
  //             }}
  //           >
  //             <FiTrash2 size={24} />
  //           </ActionIcon>
  //         </Group>
  //         <ScrollArea sx={{ height: 250, flex: 1 }} scrollHideDelay={0} offsetScrollbars={true}>
  //           <Group key={index} mt="xs">
  //             <RichTextEditor
  //               placeholder={initialDescription}
  //               sx={{ flex: 1 }}
  //               {...form.getListInputProps('projects', index, 'description')}
  //             />
  //           </Group>

  //         </ScrollArea>

  //       </Box>
  //     </Card>
  //   </div>
  // ));

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