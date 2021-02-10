
import './App.css';
import { Main } from './components/Main';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Tasks } from './screens'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/tasks' component={Tasks} />
      </Switch>
    </Router>
  );
}

export default App;
