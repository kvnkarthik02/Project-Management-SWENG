const headerStyle = {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    paddingLeft: '150px',
    paddingRight: '150px',
    paddingTop: '20px',
    paddingBottom: '20px',
    boxShadow: '0px 3px 5px #f2f2f2'
}

function LayoutHeader() {
    return(
        <div style={headerStyle}>
            Propylon Team Management
        </div>
    )
}

export default LayoutHeader;