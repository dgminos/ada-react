
import './App.css';
import { Main } from './components/Main';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Ejemplo, Tasks } from './screens'
import { AddTaskForm } from './screens/Tasks/AddTaskForm';
import { List } from './screens/Tasks/List';



const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/tasks' component={Tasks} />
        <Route path='/list' component={List} />
        <Route path='/list/add' component={AddTaskForm} />
        <Route path='/' component={Ejemplo} />
      </Switch>
    </Router>
  );
}

export default App;
