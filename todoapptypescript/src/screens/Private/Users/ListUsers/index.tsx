import React, { FC, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Layout, Main } from '../../../../components'
import { TableUsers } from './components'
import { api } from '../../../../utils'
import { usersApi } from './api'

type UserFirebase = {
    apellido: string,
    email: string,
    id: string,
    nombre: string,
    password: string
}

const ListUsers: FC = () => {

    // FUNCION PARA REDIRECCIONAR EL BTN DE AGREGAR 
    const history = useHistory();

    const redireccionarAAddUsersForm = () => {
        history.push("/users/add");
    }
    //

    const [dataUser, setdataUser] = useState<UserFirebase[]>([])


    const fetchUsers = () => {
        usersApi.get()
            .then(response => {
                setdataUser(response);
            })
    }

    useEffect(() => {
        fetchUsers()
    }, []);

    //BTN DELETE
    const deleteUser = (id: string) => {
        api.delete(`/users/${id}.json`)
            .then(() => fetchUsers())
    }

    return (
        <Layout>
            <Main title='Usuaries' handleClick={redireccionarAAddUsersForm}>
                <div className='container mt-5'>
                    <div className='row'>
                        <TableUsers dataUser={dataUser} handleClickDelete={deleteUser} />
                    </div>
                </div>
            </Main>
        </Layout>
    )
}

export { ListUsers }
