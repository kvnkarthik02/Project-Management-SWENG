import { Avatar, Card, RingProgress, Text, Group, useMantineTheme, Badge, Stack } from '@mantine/core';
import MemberDeleteModal from '../newComponents/MemberDeleteModal';
import MemberEditModal from '../newComponents/MemberEditModal';

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

const EmployeeCard = (props: {
  member: {
    memberId: string,
    firstName: string,
    lastName: string,
    email: string,
    role: string,
    avatarColor: string,
    hoursAvailable: number,
    hoursAllocated: number,
    skills: any[],
    projects: any[]
  },
  isAdmin: boolean
}
) => {

  const name = props.member.firstName + " " + props.member.lastName
  let initial = name[0]?.toUpperCase() || '';
  const PH_Email = "abcdefgh@xyz.ie";
  const PH_Role = "Developer";
  const PH_Name = "Name";
  const PH_Initial = "P";
  const Default_Avatar = "blue";
  const Workload_Percentage = (props.member.hoursAllocated / props.member.hoursAvailable) * 100;

  return (
    <div style={{ minWidth: 340, margin: 'auto', padding: "5px" }}>
      <Card shadow="sm" p="md" radius="lg" withBorder={true}>

        <Group position="apart" style={{ marginBottom: 5, marginTop: 5 }} spacing="sm">
          <Group>
            <Avatar color={props.member.avatarColor || Default_Avatar} size="lg" radius='xl'>{initial || PH_Initial}</Avatar>
            <div>
              <Text weight={500} size="lg">{name || PH_Name}</Text>
              <div style={{ marginLeft: "-5px", paddingTop: "2px", paddingBottom: "2px" }}>
                <Badge size="lg" color="cyan" variant="light" >
                  {props.member.role || PH_Role}
                </Badge>
              </div>
              <Text size="sm" style={{ color: "#4E4E4E", lineHeight: 1.5 }}>
                {props.member.email || PH_Email}
              </Text>
            </div>
          </Group>
          <RingProgress
            size={75}
            thickness={3}
            roundCaps
            sections={[{ value: (Workload_Percentage), color: getColor(Workload_Percentage) }]}
            label={
              <Text color="black" weight={450} align="center" size="lg">
                {props.member.hoursAllocated} / {props.member.hoursAvailable}
              </Text>
            }
          />
          {props.isAdmin && (
            <Group>
              <Stack>
                <MemberDeleteModal
                  memberId={props.member.memberId}
                  name={name}
                />
                <MemberEditModal member={props.member} />
              </Stack>
            </Group>
          )}
        </Group>
      </Card>
    </div>
  )
}

export default EmployeeCard;