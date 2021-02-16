import React from 'react'

const Table = () => {
    return (

        <div class="table-responsive">
            <table class="table table-hover">
                <caption>Lista de usuaries</caption>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Correo Electrónico</th>
                        <th scope="col">Contraseña</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                    </tr>
                </tbody>

            </table>
        </div>
    )
}

export { Table }
