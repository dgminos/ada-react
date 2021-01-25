import React from 'react';
import './App.css';
import Layout from './components/Layout';
import Contact from './Screens/components/Contact';
import Main from './components/Main';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Shop from './Screens/components/Shop';
import Offers from './Screens/components/Offers';
import Login from './Screens/components/Login';


const App = () => {
  return (
    <Router>
      <div className="App">
        <Layout>
          <Main>
            <Switch>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/shop">
                <Shop />
              </Route>
              <Route path="/offers">
                <Offers />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
            </ Switch>
          </Main>
        </ Layout>
      </div>
    </Router>
  );
}

export default App;
