import React, { FC } from 'react'

const Footer: FC = () => {
    let today = new Date();
    let year = today.getFullYear();
    return (
        <footer className='footer footer-alt text-center mb-5 mt-5'>
            <p>Hecho con<i className="bi bi-heart-fill text-danger"></i>{year} © ADA - ada.com.ar</p>
        </footer>
    )
}

export { Footer }