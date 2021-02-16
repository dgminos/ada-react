import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Ejemplo, Tasks, Users } from './screens'
import { AddTaskForm } from './screens/Tasks/AddTaskForm';
import { List } from './screens/Tasks/List';
import { ListUsers } from './screens/Users/ListUsers';
import { AddUserForm } from './screens/Users/AddUserForm';
import './App.css';



const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/tasks' component={Tasks} />
        {/* <Route path='/list' component={List} />
        <Route path='/list/add' component={AddTaskForm} /> */}
        <Route path='/users' component={Users} />
        {/* <Route path='/listusers' component={ListUsers} />
        <Route path='/users/add' component={AddUserForm} /> */}
        <Route path='/' component={Ejemplo} />
      </Switch>
    </Router>
  );
}

export default App;
