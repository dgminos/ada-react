import React, { FC } from 'react';
import { HeartFill } from "react-bootstrap-icons";

const Footer: FC = () => {
    let today = new Date();
    let year = today.getFullYear();
    return (
        <footer className='footer footer-alt text-center mb-5 mt-5'>
            <p>App hecha con < HeartFill className='text-danger' /> - {year} - ©<a href="https://www.adaitw.org">Ada Site</a></p>
        </footer>
    )
}

export { Footer }