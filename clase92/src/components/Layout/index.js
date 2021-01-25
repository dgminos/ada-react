import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Aside from './components/Aside';
import Footer from './components/Footer';

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <Nav />

            {children}
            <Aside />

            <Footer />
        </>
    );
}
export default Layout;