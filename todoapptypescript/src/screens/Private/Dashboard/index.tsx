import React, { FC } from 'react';
import { Layout, Main } from '../../../components';
import "./dashboard.css";

const Dashboard: FC = () => {
    return (
        <Layout>
            <Main title='Bienvenides!' showAddButton>
                <h3 className='text-center mt-5'> Ha ingresado exitosamente a To-Do App.</h3>
                <h4 className='text-center'>Aquí podrá agregar, editar y eliminar tareas y usuaries.</h4>
            </Main>
        </Layout>
    );
}

export { Dashboard };