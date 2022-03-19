import EmployeeCard from "./elements/EmployeeCard";

const container = {
  boxShadow: "2px 2px 5px lightgrey",
  backgroundColor: "#FDFDFD",
  borderRadius: "10px",
  margin: "10px",
  padding: "16px",
}
const headerStyle = {
  display: "flex",
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: "20px"
}
const headingStyle = {
  display: "inline-flex",
  fontSize: "24px",
  fontWeight: "bold",
  width: "90%",
  height: "32px",
  alignItems: 'center',
}
const addStyle = {
  display: "inline-flex",
  borderRadius: "90px",
  backgroundColor: "#64E8B7",
  color: "white",
  fontWeight: "bold",
  width: "10%",
  height: "32px",
  justifyContent: 'center',
  alignItems: 'center',
}

const AvatarColors = ["dark", "gray", "red", "pink", "grape", "violet", "indigo", "cyan", "teal", "green", "lime", "yellow", "orange"];

function ListEmployees() {
  return (

    <div style={container}>

      <div style={headerStyle}>
        <div style={headingStyle}>
          Employees
        </div>
        <div style={addStyle}>
          +
        </div>
      </div>

      <EmployeeCard name="Tim Kelly" role="Senior Developer" workload={6} capacity={16} avatarColor={AvatarColors[3]} />
      <EmployeeCard name="Ben Vaughan" role="Senior Developer" workload={10} capacity={16} avatarColor={AvatarColors[8]} />
      <EmployeeCard name="Johnny Shoe" role="Senior Developer" workload={13} capacity={16} avatarColor={AvatarColors[12]} />

    </div>
  )
}

export default ListEmployees;