import React, { useEffect } from 'react'
import { Table } from '../Table'
import { usersApi } from './api'
import { Layout, Main } from '../../../components'
import { useHistory } from 'react-router-dom'


const ListUsers = () => {

    // FUNCION PARA REDIRECCIONAR EL BTN DE AGREGAR 
    const history = useHistory();

    const redireccionarAAddTaskForm = () => {
        history.push("/users/add");
    }
    //

    const fetchUsers = () => {
        usersApi.get(usersApi)
            .then(response => { console.log(response) })
            .catch(e => {
                console.log(e)
            })
    }
    useEffect(() => {
        fetchUsers()
    }, []);

    return (
        <Layout>
            <Main title='Usuaries' handleClick={redireccionarAAddTaskForm}>
                <div className='container mt-5'>
                    <div className='row'>
                        < Table />
                    </div>
                </div>
            </Main>
        </Layout>
    )
}

export { ListUsers }
