import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Layout, Main } from '../../../../components'
import { TableUsers } from './components'
import { api } from '../../../../utils'
import { usersApi } from './api'


const ListUsers = () => {

    // FUNCION PARA REDIRECCIONAR EL BTN DE AGREGAR 
    const history = useHistory();

    const redireccionarAAddUsersForm = () => {
        history.push("/users/add");
    }
    //

    const [dataUser, setdataUser] = useState([])


    const fetchUsers = () => {
        usersApi.get()
            .then(response => {
                setdataUser(response);
            })
    }

    useEffect(() => {
        fetchUsers()
    }, []);

    const deleteUser = (id) => {
        api.delete(`/users/${id}.json`)
            .then(() => fetchUsers())
    }

    return (
        <Layout>
            <Main title='Usuaries' handleClick={redireccionarAAddUsersForm}>
                <div className='container mt-5'>
                    <div className='row'>
                        <TableUsers dataUser={dataUser} handleClick={deleteUser} />
                    </div>
                </div>
            </Main>
        </Layout>
    )
}

export { ListUsers }
