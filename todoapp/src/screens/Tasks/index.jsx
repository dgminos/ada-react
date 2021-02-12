import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Layout, Main } from '../../components';
import { AddTaskForm } from './AddTaskForm'
import { List } from './List'
import './tasks.css'


const Tasks = () => {

    const [tareas, setTareas] = useState([])

    const Add = (newTask) => {
        const { titulo, fecha, descripcion, asignada } = newTask
        setTareas([tareas,
            {
                titulo: titulo,
                fecha: fecha,
                descripcion: descripcion,
                asignada: asignada,
            },
        ]);
    };
    return (
        <>
            <Router>
                <Switch>
                    <Route path="/tasks/add" component={AddTaskForm} />
                    <Route path="/tasks" component={List} />
                </Switch>
            </Router>

        </>
    )
}

export { Tasks }
