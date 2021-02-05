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

const Main = ({ children, showSettings }) => {
    // Javascript

    return (
        <>
            {/* JSX */}

            <main className="main bg-light">
                {showSettings && (
                    <div className="settings">
                        <button className="btn">+</button>
                        <button className="btn">-</button>
                    </div>
                )}

                {children}
            </main>
        </>
    );
};

Main.defaultProps = {
    showSettings: false,
};

export default Main;