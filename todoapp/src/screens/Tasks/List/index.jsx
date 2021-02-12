import React, { useState, useEffect } from 'react'
import { Layout, Main } from '../../../components'
// import './tasks.css'
import Api from '../../../utils/api'


const List = () => {

    const [tareas, setTareas] = useState([]);

    useEffect(() => {
        Api.get().then((response) => setTareas(response));
    }, []);

    return (
        <Layout>
            <Main title="Tareas">
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='board'>
                                <div className="tasks">
                                    <h5 className="mt-0 task-header">TODO (3)</h5>
                                    <div id="task-list-one" className="task-list-items">
                                        <div className="card mb-0">
                                            <div className="card-header">
                                                Tasks
                                                    </div>
                                            {tareas.map(({ titulo, fecha, descripcion, asignado }) => {
                                                return (

                                                    <div className="card-body p-3">
                                                        <h5 className="card-title mt-2 mb-2">{titulo}</h5>
                                                        <h6 className="float-right text-muted">{fecha}</h6>
                                                        <p className=" card-text mb-0 pr-2 text-nowrap mb-2 d-inline-block">{descripcion}</p>
                                                        <span className=" card-text align-middle"><b>{asignado}</b></span>
                                                    </div>
                                                )
                                            })}
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

export { List }
