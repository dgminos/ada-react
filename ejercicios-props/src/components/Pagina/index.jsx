import React from "react";

const Pagina = ({ actual, maximo }) => {
    return (
        <div>
            <button className='btn btn-outline-info'>Previous</button>
            <button className='btn btn-outline-info'>1</button>
            <button className='btn btn-outline-info'>...</button>
            <button className='btn btn-outline-info'>{actual}</button>
            <button className='btn btn-outline-info'>...</button>
            <button className='btn btn-outline-info'>{maximo}</button>
            <button className='btn btn-outline-info'>Next</button>
        </div>
    );
};

export default Pagina;