import { Avatar, Card, RingProgress, Text, Group, useMantineTheme, Badge } from '@mantine/core';

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

// Members Schema:
//     memberId: String,
//     firstName: String,
//     lastName: String,
//     email: String,
//     avatarColor: String,
//     hoursAvailable: Number,
//     hoursAllocated: Number,
//     skills: [SkillSchema],
//     projects: [String]

const EmployeeCard = (props: {
  name: string,
  email: string,
  role: string,
  workload: number,
  capacity: number,
  avatarColor: string,
  projects: string[],
  skills: {
    name: String,
    level: Number
  }[]
}) => {

  let initial = props.name[0]?.toUpperCase() || '';
  const PH_Email = "abcdefgh@xyz.ie";
  const PH_Role = "Developer";
  const PH_Name = "Name";
  const PH_Initial = "P";
  const Default_Avatar = "blue";

  return (
    <div style={{ minWidth: 340, margin: 'auto', padding: "5px" }}>
      <Card shadow="sm" p="md" radius="lg" withBorder={true}>

        <Group position="apart" style={{ marginBottom: 5, marginTop: 5 }} spacing="sm">
          <Group>
            <Avatar color={props.avatarColor || Default_Avatar} size="lg" radius='xl'>{initial || PH_Initial}</Avatar>
            <div>
              <Text weight={500} size="lg">{props.name || PH_Name}</Text>
              <div style={{ marginLeft: "-5px", paddingTop: "2px", paddingBottom: "2px" }}>
                <Badge size="lg" color="cyan" variant="light" >
                  {props.role || PH_Role}
                </Badge>
              </div>
              <Text size="sm" style={{ color: "#4E4E4E", lineHeight: 1.5 }}>
                {props.email || PH_Email}
              </Text>
            </div>
          </Group>
          <RingProgress
            size={75}
            thickness={3}
            roundCaps
            sections={[{ value: ((props.workload / props.capacity) * 100), color: getColor((props.workload / props.capacity) * 100) }]}
            label={
              <Text color="black" weight={450} align="center" size="lg">
                {props.workload} / {props.capacity}
              </Text>
            }
          />
        </Group>
      </Card>
    </div>
  )
}

export default EmployeeCard;