import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Update } from '../Tasks/Update'
import { AddUserForm } from './AddUserForm'
import { ListUsers } from './ListUsers'

const Users = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route path="/users/add" component={AddUserForm} />
                    <Route path="/users/list" component={ListUsers} />
                    {/* <Route path='/users/update/:id' component={Update} /> */}
                </Switch>
            </Router>

        </>
    )
}

export { Users }
