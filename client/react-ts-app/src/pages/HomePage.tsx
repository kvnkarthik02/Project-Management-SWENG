import ListProjects from '../components/ListProjects';
import ListEmployees from '../components/ListEmployees';
import { Grid } from '@mantine/core';

function HomePage() {
  return (
    <Grid justify="center" columns={3} >
      <Grid.Col span={2}><ListProjects /></Grid.Col>
      <Grid.Col span={1}><ListEmployees /></Grid.Col>
    </Grid>

  )
}

export default HomePage;