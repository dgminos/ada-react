import React, { FC } from 'react'
import { PencilFill, TrashFill } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'

interface Props {
    dataUser: null
    handleClick: () => void
}

const TableUsers: FC<Props> = ({ dataUser, handleClick }) => {
    return (

        <div className='table-responsive'>
            <table className='table table-hover'>
                <thead>
                    <tr className='text-center'>
                        <th scope='col'>Número</th>
                        <th scope='col'>Nombre</th>
                        <th scope='col'>Apellido</th>
                        <th scope='col'>Correo Electrónico</th>
                        <th scope='col'>Contraseña</th>
                        <th colSpan={2}>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {dataUser.map(({ id, nombre, apellido, email, password }, i) => {
                        return (
                            <tr key={id} className='text-center'>
                                <td>{i + 1}</td>
                                <td>{nombre}</td>
                                <td>{apellido} </td>
                                <td>{email} </td>
                                <td>{password} </td>
                                <td><Link to={`/users/update/${id}`} className='btn btn-info'><PencilFill /></Link></td>
                                <td><button className='btn btn-danger' onClick={() => handleClick(id)}><TrashFill /></button></td>
                            </tr>
                        )
                    }
                    )} */}
                </tbody>

            </table>
        </div>
    )
}

export { TableUsers }
