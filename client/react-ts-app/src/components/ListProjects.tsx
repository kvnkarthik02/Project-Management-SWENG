import ProjectCard from "./elements/ProejctCard";
import { Group, Button, Text, Title, Card, Modal, Code, ActionIcon, Select, Box, Avatar, TextInput, NumberInput, ScrollArea, Checkbox } from '@mantine/core';
import { useEffect, useState } from 'react';
import { FiPlus, FiTrash2 } from 'react-icons/fi';
import { useForm, formList } from '@mantine/form';
import { RichTextEditor } from '@mantine/rte';
// import axios from "axios";
import { AppService } from "../services/app.services";



// const ListProjects = (props: { projectsList: Project[] }) => {
const ListProjects = () => {
  const initialDescription =
    '<p> <i>Please enter other details before entering the description</i> Your initial <b>html value</b> or an empty string to init editor without value</p>';
  // const [description, setDescription] = useState(initialDescription);

  const [opened, setOpened] = useState(false);
  const [projects, setProjects] = useState([{
    projectId: "",
    projectName: "",
    projectDescription: "Complete frontend for landing page dashboard",
    tasks: [],
    deadline: null,
    hasDeadline: false,
    isComplete: false,
  }]);

  const form = useForm({
    initialValues: {
      projects: formList([{
        id: '',
        name: '',
        description: initialDescription,
        deadline: '',
        hasDeadline: false,
        isComplete: false,
        badgeColor: '',
        tasks: []
      }])
    },
  });

  useEffect(() => {
    handleProjects();

  }, [projects.length]);

  const handleProjects = async () => {
    try {
      const result = await AppService.getProjects();
      console.log(result);
      result.map((project: any) => {
        const proj = {
          id: project.id,
          name: project.projectName,
          description: project.projectDescription,
          deadline: project.deadline,
          badgeColor: 'teal',
          hasDeadline: (project.deadline === undefined || project.deadline === null || project.deadline.match(/^ *$/)),
          isComplete: false,
          tasks: []
        };
        form.addListItem('projects', proj);
        return proj;
      });
      setProjects(result);
    } catch (err) {
      console.log(err)
    }
  };

  // projectId: "4f4cf77e-fa2a-49eb-8c24-b0c46a74eedd"

  // To create
  // projectName: "Landing page"
  // projectDescription: "Complete frontend for landing page dashboard"
  // hasDeadline: false
  // deadline: null
  // isComplete: false
  // tasks: []

  const createProject = async (proj: {
    id: string,
    name: string;
    description: string;
    hasDeadline: boolean;
    deadline: string;
    isComplete: boolean;
    tasks: string[];
  }) => {
    try {
      const data = {
        projectName: proj.name,
        projectDescription: proj.description,
        hasDeadline: proj.hasDeadline,
        deadline: proj.deadline,
        isComplete: proj.isComplete,
        tasks: proj.tasks
      }
      console.log(data)
      console.log(proj)
      // AppService.makeProjects(data);
    } catch (err) {
      console.log(err)
    }
  };

  const deleteProject = async (id: string) => {
    try {
      console.log(id)
      AppService.deleteProject(id);
    } catch (err) {
      console.log(err)
    }
  }

  const colors = ["gray", "red", "pink", "grape", "violet", "indigo", "cyan", "teal", "green", "lime", "yellow", "orange"];

  const fields = form.values.projects.map((_, index) => (
    <div style={{ padding: "5px" }}>
      <Card shadow="sm" p="lg" radius="md" withBorder={true} >
        <Box sx={{ maxWidth: 700, margin: 'auto' }} >
          <Group key={index} mt="xs">
            <Checkbox label=""  {...form.getListInputProps('projects', index, 'isComplete')} />
            <Avatar color={form.values.projects[index].badgeColor} size={40} radius='xl' src='' >
              <></>
            </Avatar>
            <TextInput
              placeholder="Project Name"
              required
              sx={{ flex: 1 }}
              {...form.getListInputProps('projects', index, 'name')}
            />
            <TextInput
              placeholder="Due Date"
              required
              sx={{ flex: 1 }}
              {...form.getListInputProps('projects', index, 'deadline')}
            />
            {/* <DatePicker
              allowFreeInput
              dateParser={(dateString) => new Date(Date.parse(dateString))}
              placeholder="Deadline"
              required
              sx={{ flex: 1 }}
            // onChange={form.setListItem('projects', index, 'badgeName', )}
            // {...form.getListInputProps('projects', index, 'badgeName')} />
            // {...form.setListItem('projects', index, 'badgeName')} 
            /> */}
            <Select
              placeholder='Color'
              required
              sx={{ flex: 0.5 }}
              data={colors}
              {...form.getListInputProps('projects', index, 'badgeColor')}>
            </Select>
            <ActionIcon
              color="red"
              variant="hover"
              onClick={() => {
                const id = form.values.projects[index].id;
                deleteProject(id);
                form.removeListItem('projects', index)
              }}
            >
              <FiTrash2 size={24} />
            </ActionIcon>
          </Group>
          <ScrollArea sx={{ height: 250, flex: 1 }} scrollHideDelay={0} offsetScrollbars={true}>
            <Group key={index} mt="xs">
              <RichTextEditor
                placeholder={initialDescription}
                sx={{ flex: 1 }}
                {...form.getListInputProps('projects', index, 'description')}
              />
            </Group>

          </ScrollArea>

        </Box>
      </Card>
    </div>
  ));

  return (
    <div>
      <Modal
        opened={opened}
        onClose={() => {
          setOpened(false);
          const lastProject = form.values.projects.slice(-1)[0];
          createProject(lastProject);
          return;
        }}
        size={650}
        title="Edit Project"
      >
        <Box sx={{ minWidth: 500 }} >
          {fields.length > 0 ? (
            <Group mb="xs">
            </Group>
          ) : (
            <Text color="dimmed" align="center">
              No one here...
            </Text>
          )}

          {fields}

          <Group position="center" mt="md">
            <Button style={{ backgroundColor: "#64E8B7" }} onClick={() => {
              // setTeam(form.values.employees);
              form.addListItem('projects', {
                id: '',
                name: '',
                description: '',
                deadline: '',
                badgeColor: 'teal',
                hasDeadline: false,
                isComplete: false,
                tasks: []
              })
            }}>
              Add Project
            </Button>
          </Group>
        </Box>
      </Modal>
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
              <Button size="md" radius="xl"
                onClick={() => setOpened(true)}
                style={{ backgroundColor: "#64E8B7", width: 70 }}>
                <FiPlus color="white" size={24} strokeWidth={2.5} />
              </Button>
            </Group>
          </div>
          <Group position="center" direction="column" spacing="xs">
            {/* {props.projects.map((project) => <ProjectCard project={project} />)} */}
            {form.values.projects.map((project) => <ProjectCard
              name={project.name}
              description={project.description}
              deadline={project.deadline}
              badgeColor={project.badgeColor}
            // coverImgLink={project.coverImgLink}
            // projectPageLink={project.projectPageLink}
            // coverImgLink={""}
            // projectPageLink={""}
            />)}
          </Group>
        </Card>
      </div >
    </div>
  )
}

export default ListProjects;