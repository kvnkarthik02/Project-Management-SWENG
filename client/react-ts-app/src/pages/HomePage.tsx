import ListProjects from '../components/ListProjects';
import ListEmployees from '../components/ListEmployees';
import LayoutDefault from '../components/layouts/LayoutDefault';

import { Grid } from '@mantine/core';

interface Employee {
  name: string;
  role: string;
  workload: number;
  capacity: number;
  avatarColor: string;
}

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


const HomePage = (props: { team: Employee[]; projects: Project[]; }) => {
  return (
    <LayoutDefault>
      <Grid justify="center" columns={3} >
        <Grid.Col span={2}><ListProjects projects={props.projects} /></Grid.Col>
        <Grid.Col span={1}><ListEmployees team={props.team} /></Grid.Col>
      </Grid>
    </LayoutDefault>
  )
}

export default HomePage;