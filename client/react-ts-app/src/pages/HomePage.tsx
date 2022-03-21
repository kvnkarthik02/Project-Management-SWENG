import ListProjects from '../components/ListProjects';
import ListEmployees from '../components/ListEmployees';
import TeamCard from '../components/elements/TeamCard';

import { Grid } from '@mantine/core';

interface Employee {
  name: string;
  role: string;
  workload: number;
  capacity: number;
  avatarColor: string;
}

const team: Employee[] = [
  {
    name: "Tim Kelly",
    role: "Senior Developer",
    workload: 6,
    capacity: 16,
    avatarColor: "red"
  }, {
    name: "Ben Vaughan",
    role: "Senior Developer",
    workload: 10,
    capacity: 16,
    avatarColor: "cyan"
  }, {
    name: "Johnny Shoe",
    role: "Senior Developer",
    workload: 13,
    capacity: 16,
    avatarColor: "yellow",
  }
]

function HomePage() {
  return (
    // <TeamCard {...team} />
    <Grid justify="center" columns={3} >
      <Grid.Col span={2}><ListProjects /></Grid.Col>
      <Grid.Col span={1}><ListEmployees /></Grid.Col>
    </Grid>



  )
}

export default HomePage;