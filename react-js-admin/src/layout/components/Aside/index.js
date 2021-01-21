// import React from 'react'
// import './index.css'

// const Aside = () => {
//     return (
//         <aside className="aside bg-dark">
//             <div className="accordion" id="accordionExample">
//                 <div className="accordion-item">
//                     <h2 className="accordion-header" id="headingOne">
//                         <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
//                             Navigation
//                         </button>
//                     </h2>
//                     <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
//                         <div className="accordion-body">
//                             <a href="#!">Analytics</a>
//                             <a href="#!">CRM</a>
//                             <a href="#!">ECommerce</a>
//                             <a href="#!">Projects</a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </aside>
//     )
// }

// export { Aside }

import React from 'react'
import { Logo } from './components'
import './styles.css'

const Aside = () => {
    return (
        <aside className="aside bg-dark">
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <Logo />
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Navigation
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <a href="#!">Analytics</a>
                            <a href="#!">CRM</a>
                            <a href="#!">ECommerce</a>
                            <a href="#!">Projects</a>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export { Aside }