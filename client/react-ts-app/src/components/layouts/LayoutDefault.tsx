import LayoutHeader from './elements/LayoutHeader';
import LayoutFooter from './elements/LayoutFooter';
import React from 'react';

interface Props {
    children: React.ReactNode;
}

const layoutStyle = {
    width: '100%',
    paddingLeft: '150px',
    paddingRight: '150px',
    paddingTop: '30px',
    paddingBottom: '30px',
}

export default function Layout({ children }:Props) {
    return (
        <>
        <LayoutHeader></LayoutHeader>
            <main style={layoutStyle}>{children}</main>
        <LayoutFooter></LayoutFooter>
        </>
    )
}