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

const logoStyle = {
    maxHeight: '30px'
}

function LayoutHeader() {
    return(
        <div style={headerStyle}>
            {/* <img style={logoStyle} src={require('../propylonLogo.png')}/> */}
            Propylon Project Management App
        </div>
    )
}

export default LayoutHeader;