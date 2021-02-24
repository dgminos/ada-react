import React from "react";
import { Layout, Main } from "../../components";

const Saludo = () => {
    return (
        <Layout >
            <Main title='Bienvenides!' showAddButton>
                <h3 className='text-center'> Ha ingresado exitosamente a To-do App.</h3>
                <h4>Aquí podrá agregar, editar y eliminar tareas y usuaries.</h4>
            </Main>
        </Layout>
    );
};

export { Saludo }