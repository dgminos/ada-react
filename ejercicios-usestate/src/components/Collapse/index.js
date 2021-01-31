import React from 'react'
import { ChevronUp } from 'react-bootstrap-icons'
import { ChevronDown } from 'react-bootstrap-icons'

import React, { useState } from 'react'

const Collapse = ({ children, label }) => {
    const [toggle, setToggle] = useState()

    const show = () => {
        setToggle(toggle)
    }
    return (
        <>
            <p>Qué debo hacer para utilizar estado en React?
            <button onClick={show} className='btn btn-primary' type='button' data-toggle='collapse' data-target='#collapseExample' aria-expanded='false' aria-controls='collapseExample'>
                    <ChevronUp />
                </button></p>
            <div className='collapse' id='collapseExample'>
                <div className='card card-body'>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                </div>
            </div>

            { children}
            <ChevronDown />
        </>
    )
}

export { Collapse }
