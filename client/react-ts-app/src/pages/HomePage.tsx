import ListProjects from '../components/ListProjects';
import ListEmployees from '../components/ListEmployees';
import LayoutDefault from '../components/layouts/LayoutDefault';
import ListTeam from '../components/ListTeam';
import { Grid } from '@mantine/core';

import { useAuth } from "../contexts/AuthContextII";

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

  const { login, logout } = useAuth();
  async function getOut() {
    try {
      console.log(`Signing out....`);
      await logout().then((res: any) => {
        console.log(`Logged out successfully. Response: ${res}`)
      }).catch((err: any) => (console.log(JSON.stringify(err))));
    }
    catch {
      console.log(`Couldn't reach Firebase to sign out.`)
    }
  }
  


  return (
     <LayoutDefault>
      <Grid justify="center" columns={3} >
        <Grid.Col span={2}><ListProjects projects={props.projects} /></Grid.Col>
        {/* <Grid.Col span={1}><ListEmployees team={props.team} /></Grid.Col> */}
        <Grid.Col span={1}><ListTeam team={props.team} /></Grid.Col>
      </Grid>
      <button onClick={getOut}> Log Out </button>
    </LayoutDefault>
  )
}

export default HomePage;