import React, { useState, useEffect } from 'react'
import { Layout, Main } from '../../../../components'
import './tasks.css'
import { tasksApi } from './api'
import { Update } from '../Update'
import { useHistory } from 'react-router-dom'

type TasksStates = {
    asignada: string,
    descripcion: string,
    fecha: string,
    id: string,
    titulo: string,
    estado: string
}

const List = () => {

    // FUNCION PARA REDIRECCIONAR EL BTN DE AGREGAR 
    const history = useHistory();

    const redireccionarAAddTaskForm = () => {
        history.push("/tasks/add");
    }

    const [pendiente, setPendiente] = useState<TasksStates[]>([])
    const [realizada, setRealizada] = useState<TasksStates[]>([])
    const [cancelada, setCancelada] = useState<TasksStates[]>([])

    const fetchTasks = () => {
        tasksApi.get().then((response => {
            setPendiente(response.filter(t => t.estado === 'pendiente'))
            setRealizada(response.filter(t => t.estado === 'realizada'))
            setCancelada(response.filter(t => t.estado === 'cancelada'))
        }))
    }

    useEffect(() => {
        fetchTasks()
    }, []);

    return (
        <Layout>
            <Main title='Tareas' handleClick={redireccionarAAddTaskForm}>
                <div className='container mt-5'>
                    <div className='row'>
                        <div className='col-4 col-pendiente'>
                            <div className='board'>
                                <div className='tasks'>
                                    <a className='fs-5 text-decoration-none text-dark' data-bs-toggle='collapse' href='#multiCollapseExample1' role='button' aria-expanded='false' aria-controls='multiCollapseExample1'>PENDIENTES ({pendiente.length})</a>
                                    <div className='collapse multi-collapse' id='multiCollapseExample1'>
                                        <div id='task-list-one' className='task-list-items'>
                                            {pendiente.map(({ asignada, descripcion, fecha, id, titulo, estado }) => (
                                                <Update
                                                    asignada={asignada}
                                                    descripcion={descripcion}
                                                    fecha={fecha}
                                                    id={id}
                                                    key={id}
                                                    titulo={titulo}
                                                    estado={estado}
                                                    onTaskStatusChange={fetchTasks}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-4 col-realizada'>
                            <div className='board'>
                                <div className='tasks'>
                                    <a className='fs-5 text-decoration-none text-dark' data-bs-toggle='collapse' href='#multiCollapseExample1' role='button' aria-expanded='false' aria-controls='multiCollapseExample1'>REALIZADAS ({realizada.length})</a>
                                    <div className='collapse multi-collapse' id='multiCollapseExample1'>
                                        <div id='task-list-two' className='task-list-items'>
                                            {realizada.map(({ asignada, descripcion, fecha, id, titulo, estado }) => (
                                                <Update
                                                    asignada={asignada}
                                                    descripcion={descripcion}
                                                    fecha={fecha}
                                                    id={id}
                                                    key={id}
                                                    titulo={titulo}
                                                    estado={estado}
                                                    onTaskStatusChange={fetchTasks} />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-4 col-cancelada'>
                            <div className='board'>
                                <div className='tasks'>
                                    <a className='fs-5 text-decoration-none text-dark' data-bs-toggle='collapse' href='#multiCollapseExample1' role='button' aria-expanded='false' aria-controls='multiCollapseExample1'>CANCELADAS ({cancelada.length})</a>
                                    <div className='collapse multi-collapse' id='multiCollapseExample1'>
                                        <div id='task-list-three' className='task-list-items'>
                                            {cancelada.map(({ asignada, descripcion, fecha, id, titulo, estado }) => (
                                                <Update
                                                    asignada={asignada}
                                                    descripcion={descripcion}
                                                    fecha={fecha}
                                                    id={id}
                                                    key={id}
                                                    titulo={titulo}
                                                    estado={estado}
                                                    onTaskStatusChange={fetchTasks} />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Main>
        </Layout>
    )
}

export { List };
