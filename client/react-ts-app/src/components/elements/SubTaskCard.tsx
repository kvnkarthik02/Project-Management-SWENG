import { Card, Text, Grid, Checkbox } from '@mantine/core';


export const SubTaskCard = (props: { description: string }) => {
    return (
        <div style={{ padding: "5px" }}>
            <Card shadow="sm" p="lg" withBorder={true} radius="md" style={{ padding: "10px" }}>
                <Grid columns={6} align="center">
                    <Grid.Col span={1}><Checkbox size="xl" color="cyan" radius="xl" transitionDuration={100} /></Grid.Col>
                    <Grid.Col span={5} style={{ marginLeft: -15 }}>
                        <Text size="lg" weight={500} style={{ color: "gray" }} >
                            {props.description}
                        </Text>
                    </Grid.Col>
                </Grid>
            </Card>
        </div>
    )
}
export default SubTaskCard
