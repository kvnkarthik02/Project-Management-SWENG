import EmployeeCard from "./elements/EmployeeCard";
import { Group, Button, Text, Title, Card } from '@mantine/core';
import { FiPlus } from 'react-icons/fi';

// const container = {
//   boxShadow: "2px 2px 5px lightgrey",
//   backgroundColor: "#FDFDFD",
//   borderRadius: "10px",
//   margin: "10px",
//   padding: "16px",
// }
// const headerStyle = {
//   display: "flex",
//   justifyContent: 'center',
//   alignItems: 'center',
//   marginBottom: "20px"
// }
// const headingStyle = {
//   display: "inline-flex",
//   fontSize: "24px",
//   fontWeight: "bold",
//   width: "90%",
//   height: "32px",
//   alignItems: 'center',
// }
// const addStyle = {
//   display: "inline-flex",
//   borderRadius: "90px",
//   backgroundColor: "#64E8B7",
//   color: "white",
//   fontWeight: "bold",
//   width: "10%",
//   height: "32px",
//   justifyContent: 'center',
//   alignItems: 'center',
// }

const AvatarColors = ["dark", "gray", "red", "pink", "grape", "violet", "indigo", "cyan", "teal", "green", "lime", "yellow", "orange"];

function ListEmployees() {
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
                size="xl"
                weight={700}
                style={{ fontFamily: 'Greycliff CF, sans-serif' }}> Employees</Text>
            </Title>
            <Button size="md" radius="xl" style={{ backgroundColor: "#64E8B7", width: 70 }}>
              <FiPlus color="white" size={24} strokeWidth={2.5} />
            </Button>
          </Group>
        </div>

        <Group position="center" direction="column" spacing="xs">
          <EmployeeCard name="Tim Kelly" role="Senior Developer" workload={6} capacity={16} avatarColor={AvatarColors[3]} />
          <EmployeeCard name="Ben Vaughan" role="Senior Developer" workload={10} capacity={16} avatarColor={AvatarColors[8]} />
          <EmployeeCard name="Johnny Shoe" role="Senior Developer" workload={13} capacity={16} avatarColor={AvatarColors[12]} />
        </Group>

      </Card>
    </div >

  )
}

export default ListEmployees;