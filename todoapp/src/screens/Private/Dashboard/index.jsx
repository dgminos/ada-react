import React from 'react';
import { Layout, Main } from '../../../components';

const Dashboard = () => {
    return (
        <Layout>
            <Main title='Bienvenides!' showAddButton>
                <h3 className='text-center'> Ha ingresado exitosamente a To-Do App.</h3>
                <h4 className='text-center'>Aquí podrá agregar, editar y eliminar tareas y usuaries.</h4>
            </Main>
        </Layout>
    );
}

export { Dashboard };