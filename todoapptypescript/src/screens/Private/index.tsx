import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Tasks } from './Tasks'
// import { Users } from './Users'
import { Dashboard } from './Dashboard'


const Private = () => {
    return (
        <Router>
            <Switch>
                <Route path='/tasks' component={Tasks} />
                {/* <Route path='/users' component={Users} /> */}
                <Route path='/' component={Dashboard} />
            </Switch>
        </Router>
    )
}

export { Private }
