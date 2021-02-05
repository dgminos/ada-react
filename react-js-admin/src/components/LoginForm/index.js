import React, { useState } from "react";

export const LoginForm = ({ login }) => {

    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        login(user, pass)
    }

    console.log(user, pass)

    return (
        <form onSubmit={handleSubmit}>

            {/* Dos casos de como mostrar los input en JSX */}

            <div className="form-group">
                <label>Usuario</label>
                <input
                    type="text"
                    name="user"
                    value={user}
                    className="form-control"
                    onChange={(e) => {
                        setUser(e.target.value)
                    }} />
            </div>
            <div>
                <label>Contraseaña</label>
                <input type="text" name="pass" value={pass} className="form-control" onChange={(e) => setPass(e.target.value)} />
            </div>

            <button type="submit" className="btn btn-primary">Iniciar Sessión</button>
        </form>
    )
};