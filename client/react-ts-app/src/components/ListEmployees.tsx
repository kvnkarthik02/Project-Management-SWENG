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
  display: "inline-flex",
  width: "100%",
  height: "70px",
  boxShadow: "2px 2px 5px lightgrey",
  borderRadius: "10px",
  padding: "16px",
  alignItems: 'center',
}

const avatarStyle = {
  width: "5%",
  height: "40px",
  display: "inline-flex",
  color: "white",
  fontWeight: "bold",
  borderRadius: "90px",
  backgroundColor: "#FF7676",
  justifyContent: 'center',
  alignItems: 'center',
}

const capacityStyle = {

}

const capacityContainer = {
  border: "1px solid #5D5D5D",
  padding: "12px",
  borderRadius: "15px",
  color: "#5D5D5D",
}

const nameStyle = {
  width: "85%",
  paddingLeft: '20px'
}

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

      <div style={bodyStyle}>
        <div style={avatarStyle}>
          t
        </div>
        
        <div style={nameStyle}>
          <div style={{fontSize: "18px", color: "#4E4E4E",}}>
            Tim Kelly
          </div>
          <div style={{fontSize: "12px", color: "#4E4E4E",}}>
            Senior Developer
          </div>
        </div>

        <div style={capacityContainer}>
          <div style={capacityStyle}>
            14/16
          </div>
        </div>
      </div>

      <div style={bodyStyle}>
        <div style={avatarStyle}>
          t
        </div>

        <div style={nameStyle}>
          <div style={{fontSize: "18px", color: "#4E4E4E",}}>
            Tim Kelly
          </div>
          <div style={{fontSize: "12px", color: "#4E4E4E",}}>
            Senior Developer
          </div>
        </div>

        <div style={capacityContainer}>
          <div style={capacityStyle}>
            09/16
          </div>
        </div>
      </div>

      <div style={bodyStyle}>
        <div style={avatarStyle}>
          t
        </div>

        <div style={nameStyle}>
          <div style={{fontSize: "18px", color: "#4E4E4E",}}>
            Tim Kelly
          </div>
          <div style={{fontSize: "12px", color: "#4E4E4E",}}>
            Senior Developer
          </div>
        </div>

        <div style={capacityContainer}>
          <div style={capacityStyle}>
            12/16
          </div>
        </div>
      </div>


    </div>
  )
}

export default ListEmployees;