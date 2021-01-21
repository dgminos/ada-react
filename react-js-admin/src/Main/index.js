// import React from 'react'

// const Main = () => {
//     return (
//         <div>
//             Main
//         </div>
//     )
// }

// export { Main }

import React from "react";
import "./styles.css";

const Main = ({ children }) => {
    return (
        <main className="main bg-light">
            {children}
        </main>
    )
};

export default Main;