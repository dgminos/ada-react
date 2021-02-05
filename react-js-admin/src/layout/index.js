// import { Header, Aside, Footer } from './components';
// import './styles.css'

// const Layout = ({ children }) => {
//     return (
//         <div className="position">
//             <Aside />
//             <div className="main">
//                 <Header />
//                 {children}
//                 <Footer />
//             </div>
//         </div>
//     )
// }

// export { Layout }

import React from "react";
import { Header, Footer, Aside } from "./components";
import "./styles.css";

const Layout = (props) => {
    const { children, hideHeader, hideAside, hideFooter, title } = props;

    return (
        <div className="layout">
            {hideAside === false && <Aside />}

            <div className="contenedor">
                {hideHeader === false && <Header title={title} />}
                {children}
                {hideFooter === false && <Footer />}
            </div>
        </div>
    );
};

Layout.defaultProps = {
    hideHeader: false,
    hideAside: false,
    hideFooter: false,
};

export default Layout;