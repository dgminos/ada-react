
import React, { FC, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Layout, Main } from '../../../../components'
import { api } from '../../../../utils'

const AddUserForm: FC = () => {

    let history = useHistory();
    const [usuarie, setUsuarie] = useState({
        nombre: '',
        apellido: '',
        email: '',
        password: '',
    })

    const [error, setError] = useState('');

    const handleInputChange = (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = event.currentTarget
        setUsuarie({
            ...usuarie,
            [name]: value
        })
    }

    const redirectToListUsers = () => {
        history.push("/users/list")
    }

    const enviarDatos = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (!usuarie.nombre.trim() || !usuarie.apellido.trim() || !usuarie.email.trim() || !usuarie.password.trim()) {
            setError("Revise los campos")
            return
        }

        api.post('/users.json', {
            nombre: usuarie.nombre,
            apellido: usuarie.apellido,
            email: usuarie.email,
            password: usuarie.password,
        })
            .then(redirectToListUsers)
            .catch(error => {
                console.log(error)
            })

        //setUsuarie('')
    }

    return (
        <Layout >
            <Main title='Agregar Usuarie' showAddButton>
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <form className='form-agregar-usuarie mt-5' onSubmit={enviarDatos}>
                                <div className='form-group'>
                                    <label htmlFor='nombre'><b>Nombre</b></label>
                                    <input type='text' name='nombre' className='form-control' id='nombre' placeholder='Escriba su nombre' onChange={(event) => handleInputChange(event)} />
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='apellido'><b>Apellido</b></label>
                                    <input type='text' name='apellido' className='form-control' id='apellido' placeholder='Escriba su apellido' onChange={(event) => handleInputChange(event)} />
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='email'><b>Email</b></label>
                                    <input type='email' name='email' className='form-control' id='email' placeholder='Escriba su correo electrónico' onChange={(event) => handleInputChange(event)} />
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='password'><b>Contraseña</b></label>
                                    <input type='password' name='password' className='form-control' id='password' placeholder='Escriba su contraseña' onChange={(event) => handleInputChange(event)} />
                                </div>
                                <div className='row'>
                                    <div className='col'>
                                        <button className='btn btn-primary btn-agregar-usuarie mt-5' type='submit'>Agregar</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {
                    error != null ? (
                        <div className='alert alert-danger mt-2' role='alert'>{error} </div>
                    ) : (<div></div>)
                }
            </Main >
        </Layout >


    )
}

export { AddUserForm }
