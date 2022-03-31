import ListProjects from '../components/ListProjects';
import ListEmployees from '../components/ListEmployees';
import ListTeam from '../components/ListTeam';
import { Grid } from '@mantine/core';

interface Employee {
  name: string;
  email: string;
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
  // coverImgLink: string;
  // projectPageLink: string;
  //   workload: number;
  //   capacity: number;
  //   avatarColor: string;
}


const HomePage = (props: { team: Employee[]; projects: Project[]; }) => {
  return (
    // <TeamCard {...team} />
    <Grid justify="center" columns={3} >
      <Grid.Col span={2}><ListProjects projects={props.projects} /></Grid.Col>
      {/* <Grid.Col span={1}><ListEmployees team={props.team} /></Grid.Col> */}
      <Grid.Col span={1}><ListTeam team={props.team} /></Grid.Col>
    </Grid>



  )
}

export default HomePage;