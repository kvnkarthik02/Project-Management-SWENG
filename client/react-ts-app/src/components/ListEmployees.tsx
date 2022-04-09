import EmployeeCard from "./elements/EmployeeCard";
import { Group, Button, Text, Title, Card } from '@mantine/core';
import { FiPlus } from 'react-icons/fi';

interface Employee {
  name: string;
  email: string;
  role: string;
  workload: number;
  capacity: number;
  avatarColor: string;
}

const AvatarColors = ["dark", "gray", "red", "pink", "grape", "violet", "indigo", "cyan", "teal", "green", "lime", "yellow", "orange"];

const ListEmployees = (props: { team: Employee[]; }) => {



  return (
    <div style={{ width: 400, margin: 'auto', padding: "5px" }}>
      <Card shadow="sm" p="lg" radius="md" withBorder={true}>
        <div style={{ width: 340, margin: 'auto', padding: "5px" }}>
          <Group position="apart">
            <Title order={1}>
              <Text
                color="dark"
                inherit
                component="span"
                variant="text"
                // variant="gradient"
                // gradient={{ from: 'indigo', to: 'pink', deg: 45 }}
                size="lg"
                weight={500}
                style={{ fontFamily: 'Greycliff CF, sans-serif' }}>Team</Text>
            </Title>
            <Button size="md" radius="xl" style={{ backgroundColor: "#64E8B7", width: 70 }}>
              <FiPlus color="white" size={24} strokeWidth={2.5} />
            </Button>
          </Group>
        </div>

        <Group position="center" direction="column" spacing="xs">
          {props.team.map((member: Employee) => <EmployeeCard name={member.name}
            email={member.email}
            role={member.role}
            workload={member.workload}
            capacity={member.capacity}
            avatarColor={member.avatarColor}
            projects={[]}
            skills={[{
              name: "undefined",
              level: 1
            }]} />)}
        </Group>

      </Card>
    </div >
  )
}

export default ListEmployees;