import LayoutHeader from './elements/LayoutHeader';
import LayoutFooter from './elements/LayoutFooter';
import React from 'react';
import background from './propylonBackground.svg';

interface Props {
    children: React.ReactNode;
}

const layoutStyle = {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    minWidth: '1300px',
    paddingLeft: '150px',
    paddingRight: '150px',
    paddingTop: '30px',
    paddingBottom: '30px',
}

const backgroundStyle = {
    // background: '',
    backgroundImage: `url(${background})`,
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom right',
    backgroundSize: '100%'
}

export default function Layout({ children }:Props) {
    return (
        <div style={backgroundStyle}>
            <LayoutHeader></LayoutHeader>
                <main style={layoutStyle}>{children}</main>
            <LayoutFooter></LayoutFooter>
        </div>
    )
}