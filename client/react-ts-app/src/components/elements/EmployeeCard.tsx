import { Avatar, Card, RingProgress, Text, Group, useMantineTheme } from '@mantine/core';


// const bodyStyle = {
//   display: "inline-flex",
//   width: "100%",
//   height: "70px",
//   boxShadow: "2px 2px 5px lightgrey",
//   borderRadius: "10px",
//   padding: "16px",
//   alignItems: 'center',
// }
// const capacityStyle = {
// }
// const capacityContainer = {
//   marginRight: "0",
//   marginLeft: "auto",
//   border: "1px solid #5D5D5D",
//   padding: "12px",
//   borderRadius: "15px",
//   color: "#5D5D5D",
// }
// const nameStyle = {
//   paddingLeft: '20px'
// }

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

function EmployeeCard(employee: Employee) {

  let initial = employee.name.substr(0, 1)
  // const randomColor = colors[Math.floor(Math.random() * colors.length)];

  return (
    <div style={{ width: 340, margin: 'auto', padding: "5px" }}>
      <Card shadow="sm" p="md" radius="lg" withBorder={true}>
        {/* top, right, left margins are negative – -1 * theme.spacing.xl */}

        <Group position="apart" style={{ marginBottom: 5, marginTop: 5 }} spacing="sm">
          <Group>
            <Avatar color={employee.avatarColor} size="lg" radius='xl'>{initial}</Avatar>
            <div>
              <Text weight={500} size="lg">{employee.name}</Text>
              <Text size="md" style={{ color: "#4E4E4E", lineHeight: 1.5 }}>
                {employee.role}
              </Text>
            </div>
          </Group>
          <RingProgress
            size={75}
            thickness={3}
            roundCaps
            sections={[{ value: ((employee.workload / employee.capacity) * 100), color: getColor((employee.workload / employee.capacity) * 100) }]}
            label={
              // <Text color={getColor((employee.workload / employee.capacity) * 100)} weight={450} align="center" size="lg">
              <Text color="black" weight={450} align="center" size="lg">
                {employee.workload} / {employee.capacity}
              </Text>
            }
          />
        </Group>
      </Card>
    </div>
  )
}


// function getRandomColor() {
//   var letters = '0123456789ABCDEF';
//   var color = '#';
//   for (var i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }

export default EmployeeCard;