const bodyStyle = {
  display: "inline-flex",
  width: "100%",
  height: "70px",
  boxShadow: "2px 2px 5px lightgrey",
  borderRadius: "10px",
  padding: "16px",
  alignItems: 'center',
}
const capacityStyle = {
}
const capacityContainer = {
  marginRight: "0",
  marginLeft: "auto",
  border: "1px solid #5D5D5D",
  padding: "12px",
  borderRadius: "15px",
  color: "#5D5D5D",
}
const nameStyle = {
  paddingLeft: '20px'
}

interface Employee {
  name: string;
  role: string;
  workload: number;
  capacity: number;
}

function EmployeeCard(employee: Employee) {
  let initial = employee.name.substr(0, 1)

  return (
    <div style={bodyStyle}>
      <div style={{
        width: "40px",
        height: "40px",
        display: "inline-flex",
        backgroundColor: getRandomColor(),
        color: "white",
        fontWeight: "bold",
        borderRadius: "90px",
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        {initial}
      </div>

      <div style={nameStyle}>
        <div style={{ fontSize: "18px", color: "#4E4E4E", }}>
          {employee.name}
        </div>
        <div style={{ fontSize: "12px", color: "#4E4E4E", }}>
          {employee.role}
        </div>
      </div>

      <div style={capacityContainer}>
        <div style={capacityStyle}>
          {employee.workload} / {employee.capacity}
        </div>
      </div>
    </div>
  )
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


export default EmployeeCard;