import React, { useState } from 'react'

const LikeButton = () => {

    const [isLiked, setIsLiked] = useState(false)

    const handleClick = () => {
        setIsLiked(!isLiked)
    }

    return (
        <button className={`btn ${isLiked ? 'btn-danger' : 'btn-primary'}`} onClick={handleClick}>
            {isLiked ? 'Dislike' : 'Like'}
        </button>
    )
}

export { LikeButton }