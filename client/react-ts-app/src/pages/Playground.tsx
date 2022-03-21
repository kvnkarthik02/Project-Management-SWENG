import ListProjects from '../components/ListProjects';
import ListEmployees from '../components/ListEmployees';
import { Grid } from '@mantine/core';

function Playground() {
  return (
    <Grid columns={5}>
      <Grid.Col span={3}><ListProjects /></Grid.Col>
      <Grid.Col span={2}><ListEmployees /></Grid.Col>
    </Grid>

  )
}

export default Playground;