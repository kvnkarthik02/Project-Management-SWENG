import ProjectCard from "./elements/ProejctCard";
import { Group, Button, Text, Title, Card, Modal, Code, ActionIcon, Select, Box, Avatar, TextInput, NumberInput, ScrollArea } from '@mantine/core';
import { useState } from 'react';
import { FiPlus, FiTrash2 } from 'react-icons/fi';
import { useForm, formList } from '@mantine/form';
import { RichTextEditor } from '@mantine/rte';


interface Project {
  name: string;
  description: string;
  badgeName: string;
  badgeColor: string;
  // coverImgLink: string;
  // projectPageLink: string;
}

const ListProjects = (props: { projects: Project[] }) => {
  const initialDescription =
    '<p> <i>Please enter other details before entering the description</i> Your initial <b>html value</b> or an empty string to init editor without value</p>';
  // const [description, setDescription] = useState(initialDescription);

  const [opened, setOpened] = useState(false);

  const form = useForm({
    initialValues: {
      projects: formList([{
        name: '',
        description: initialDescription,
        badgeName: '',
        badgeColor: '',
      }])
    },
  });
  const colors = ["gray", "red", "pink", "grape", "violet", "indigo", "cyan", "teal", "green", "lime", "yellow", "orange"];


  const fields = form.values.projects.map((_, index) => (
    <div style={{ padding: "5px" }}>
      <Card shadow="sm" p="lg" radius="md" withBorder={true} >
        <Box sx={{ maxWidth: 700, margin: 'auto' }} >
          <Group key={index} mt="xs">
            <Avatar color={form.values.projects[index].badgeColor} size={40} radius='xl' src='' >
              {form.values.projects[index].badgeName?.toUpperCase()[0]}
            </Avatar>

            <TextInput
              placeholder="Project Name"
              required
              sx={{ flex: 1 }}
              {...form.getListInputProps('projects', index, 'name')}
            />
            <TextInput
              placeholder="Category"
              required
              sx={{ flex: 1 }}
              {...form.getListInputProps('projects', index, 'badgeName')}
            />
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
              onClick={() => form.removeListItem('projects', index)}
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
        onClose={() => setOpened(false)}
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
            <Button onClick={() => {
              // setTeam(form.values.employees);
              form.addListItem('projects', {
                name: '',
                description: initialDescription,
                badgeName: '',
                badgeColor: '',
                // coverImgLink: '',
                // projectPageLink: '',
              })
            }}>
              Add Project
            </Button>
          </Group>


          {/* <Text size="md" weight={700} mt="md" color="cyan">
            Form values:
          </Text>
          <Code block>{JSON.stringify(form.values, null, 2)}</Code> */}
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
              badgeName={project.badgeName}
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