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
const bodyStyle = {
  boxShadow: "2px 2px 5px lightgrey",
  borderRadius: "10px",
  padding: "16px"
}
const projectStyle = {
  display: "inline-flex",
  width: "90%",
}
const viewStyle = {
  display: "inline-flex",
  width: "10%",
  height: "32px",
  backgroundColor: "#64E8B7",
  fontSize: "12px",
  justifyContent: 'center', 
  alignItems: 'center',
  color: "white",
  borderRadius: "90px"
}

function ListProjects() {
  return (

    <div style={container}>

      <div style={headerStyle}>
        <div style={headingStyle}>
          Projects
        </div>
        <div style={addStyle}>
          +
        </div>
      </div>

      <div style={bodyStyle}>
        <div style={projectStyle}>
          Propylon Web Application
        </div>
        <div style={viewStyle}>
          View
        </div>
      </div>

      <div style={bodyStyle}>
        <div style={projectStyle}>
          Project II
        </div>
        <div style={viewStyle}>
          View
        </div>
      </div>

      <div style={bodyStyle}>
        <div style={projectStyle}>
          Project III
        </div>
        <div style={viewStyle}>
          View
        </div>
      </div>

    </div>
  )
}

export default ListProjects;