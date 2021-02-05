
import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)

    const increase = () => {
        setCount(count + 1)

    }
    const decrease = () => {
        setCount(count - 1)

    }
    return (
        <>
            <button className='btn' onClick={increase}>+</button>
            <input placeholder='Write a number' value={count} />
            <button className='btn' onClick={decrease}>-</button>
        </>
    )
}
export { Counter }