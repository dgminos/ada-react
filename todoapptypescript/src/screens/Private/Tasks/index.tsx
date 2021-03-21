import React, { FC } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AddTaskForm } from './AddTaskForm';
import { List } from './List'

const Tasks: FC = () => {

    return (
        <>
            <Router>
                <Switch>
                    <Route path="/tasks/add" component={AddTaskForm} />
                    <Route path="/tasks/list" component={List} />
                </Switch>
            </Router>
        </>
    )
}

export { Tasks }
