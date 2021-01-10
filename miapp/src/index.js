//este es el index principal que hace uso de ReactDOM con el método render y dicho render recibe 2 parámetros:1)<App />(componente de inicio),
//2)traigo el elemento del DOM en el que debería renderizarse toda mi aplicación.

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

