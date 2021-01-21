// import React from "react";
// import { Layout } from './layout'
// import './App.css';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Switch>
//         <Layout />
//       </Switch>
//     </BrowserRouter>
//   );
// }

// export default App;

import './App.css';

import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

import { Dashboard, Products, Users } from './Screens';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/products" component={Products} />
        <Route path="/users" component={Users} />
        <Route path="/" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;