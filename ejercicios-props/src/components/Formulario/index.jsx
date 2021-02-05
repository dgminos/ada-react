import React, { useState } from "react";
import { Precio } from "../Precio";

const Formulario = () => {
    const [moneda, setMoneda] = useState("ARS");
    const [valor, setValor] = useState(123);
    console.log(moneda);

    const handleChangeMoneda = (e) => setMoneda(e.target.value);
    const handleChangeValor = (e) => setValor(e.target.value);
    return (
        <div>
            <input
                type="text"
                placeholder="Moneda"
                value={moneda}
                onChange={handleChangeMoneda}
            />
            <input
                type="number"
                placeholder="Valor"
                value={valor}
                onChange={handleChangeValor}
            />
            <Precio valor={valor} moneda={moneda} />
        </div>
    );
};

export default Formulario;
