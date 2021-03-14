import React from 'react'
import { AuthProvider } from "./contexts";
import { AuthRoute } from 'screens';
import "./App.css";

const App = () => {

  return (
    <AuthProvider>
      <AuthRoute />
    </AuthProvider>
  )
};

export default App;
