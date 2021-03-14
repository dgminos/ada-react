


import React, { useState } from 'react'

const Collapse = ({ children, label }) => {
    const [toggle, setToggle] = useState(false)

    const show = () => {
        setToggle(!toggle)
    }
    return (
        <>
            <button onClick={show} className='btn btn-primary' type='button'>
                {label}
            </button>
            {toggle &&
                <div>{children}
                </div>
            }
        </>
    )
}

export { Collapse }
