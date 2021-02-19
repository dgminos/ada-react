import React from 'react'
import { Route, Router, Switch } from 'react-router-dom'
import { Tasks } from '../Private/Tasks'
import { Users } from '../Private/Users'


const Private = () => {
    return (
        <Router>
            <Switch>
                <Route path='/tasks' component={Tasks} />
                <Route path='/users' component={Users} />
            </Switch>
        </Router>
    )
}

export { Private }
