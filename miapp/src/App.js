
//ESTE ES EL PUNTO DE PARTIDA DE NUESTRA APLICACIÓN

//todo lo que antes separabamos en archivos ahora se llaman componentes.EJ:si tengo la cabecera de mi aplicación Y
//quiero que sea un componente, si tengo una barra de navegación lateral eso es un componente, si tengo un artículo de noticias eso 
//tiene que ser otro componente. Acá el componente es app.js y su nombre se escribe con mayúsculas al principio. Cada carpeta/componente 
//debe tener su index.js

import React from 'react'
import { Header } from './components' //acá esta el componente Header(dentro de la carpeta components)

const App = () => { //componente que se llama App
  const cont = 4;

  return (<div className="my app" id="my app">
    <Header />
    <h1>Mi primera app de React</h1>
    Mi contador está en {cont}
  </div> //esto no es html, es jsx. el return de jsx renderiza algo en el browser. esto me permite crear variables antes del return 
    //para mostrarlas dentro del render de la aplicación. 
  );
};

export default App;



//rafc=comando para generar un componente "base" sobre el cual vamos a poder escribir o renombrar según el componente que necesitemos crear.

//se ve en verde porque es un componente, en este caso estamos llamando al componente Header