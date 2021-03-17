import React from 'react';
import { Layout, Main } from '../../../components';
import "./dashboard.css";

const Dashboard = () => {
    return (
        <Layout>
            <Main className='text-center' title='Bienvenides!' className='titulo-dashboard' showAddButton>
                <h3 className='text-center mt-5'> Ha ingresado exitosamente a To-Do App.</h3>
                <h4 className='text-center'>Aquí podrá agregar, editar y eliminar tareas y usuaries.</h4>
            </Main>
        </Layout>
    );
}

export { Dashboard };