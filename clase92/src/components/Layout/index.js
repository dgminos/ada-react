import React from 'react';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Aside from './Aside';
import Footer from './Footer';

const Layout = () => {
    return (
        <>
            <Header />
            <Nav />

            <Main />
            <Aside />

            <Footer />
        </>
    );
}
export default Layout;