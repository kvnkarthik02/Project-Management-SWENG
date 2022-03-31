import { Avatar, Card, RingProgress, Text, Group, useMantineTheme } from '@mantine/core';

interface Employee {
  name: string;
  role: string;
  workload: number;
  capacity: number;
  avatarColor: string;
}


function getColor(value: number) {
  //value from 0 to 1
  var perc = 100 - value
  var r, g, b = 0;
  if (perc < 50) {
    r = 255;
    g = Math.round(5.1 * perc);
  }
  else {
    g = 255;
    r = Math.round(510 - 5.10 * perc);
  }
  var h = r * 0x10000 + g * 0x100 + b * 0x1;
  return '#' + ('000000' + h.toString(16)).slice(-6);
}


const colors = ["dark", "gray", "red", "pink", "grape", "violet", "indigo", "cyan", "teal", "green", "lime", "yellow", "orange"];


const EmployeeCard = (props: { employee: Employee }) => {

  let initial = props.employee.name.substr(0, 1)
  return (
    <div style={{ width: 340, margin: 'auto', padding: "5px"}}>
      <Card shadow="sm" p="md" radius="lg" withBorder={true}>
        <Group position="apart" style={{ marginBottom: 5, marginTop: 5 }} spacing="sm">
          <Group>
            <Avatar color={props.employee.avatarColor} size="lg" radius='xl'>{initial}</Avatar>
            <div>
              <Text weight={500} size="lg">{props.employee.name}</Text>
              <Text size="md" style={{ color: "#4E4E4E", lineHeight: 1.5 }}>
                {props.employee.role}
              </Text>
            </div>
          </Group>
          <RingProgress
            size={75}
            thickness={3}
            roundCaps
            sections={[{ value: ((props.employee.workload / props.employee.capacity) * 100), color: getColor((props.employee.workload / props.employee.capacity) * 100) }]}
            label={
              // <Text color={getColor((employee.workload / employee.capacity) * 100)} weight={450} align="center" size="lg">
              <Text color="black" weight={450} align="center" size="lg">
                {props.employee.workload} / {props.employee.capacity}
              </Text>
            }
          />
        </Group>
      </Card>
    </div>
  )
}

export default EmployeeCard;