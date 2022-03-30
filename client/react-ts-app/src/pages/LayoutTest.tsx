import LayoutDefault from '../components/layouts/LayoutDefault';
import ListProjects from '../components/ListProjects';
import ListEmployees from '../components/ListEmployees';
import { Grid } from '@mantine/core';

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

interface Employee {
  name: string;
  role: string;
  workload: number;
  capacity: number;
  avatarColor: string;
}

const LayoutTest = (props: { team: Employee[]; projects: Project[]; }) =>  {
  return (
    <>
      <LayoutDefault>
        <Grid justify="center" columns={3} >
          <Grid.Col span={2}><ListProjects projects={props.projects} /></Grid.Col>
          <Grid.Col span={1}><ListEmployees team={props.team} /></Grid.Col>
        </Grid>
      </LayoutDefault>
    </>
  )
}

export default LayoutTest;