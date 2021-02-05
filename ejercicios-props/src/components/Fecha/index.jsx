import React from "react";

const Fecha = ({ fecha }) => {
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    let fechaParceada = new Intl.DateTimeFormat("es-AR", options).format(fecha);

    return <p>{fechaParceada}</p>;
};

export { Fecha };