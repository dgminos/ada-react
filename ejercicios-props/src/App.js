import "./App.css";
import { Fecha, Precio } from "./components";
import Formulario from "./components/Formulario";
import Pagina from "./components/Pagina";
import Puntaje from "./components/Puntaje";
import Alert from "./components/Alert";
import ListaStock from "./components/ListaStock";

const productos = [
  { producto: "Chocolates", cantidad: 34, maximo: 100 },
  { producto: "Caramelos", cantidad: 99, maximo: 200 },
  { producto: "Turrones", cantidad: 3, maximo: 50 },
  { producto: "Alfajores", cantidad: 25, maximo: 130 },
  { producto: "Tortas", cantidad: 9, maximo: 10 },
];

function App() {
  return (
    <div className="App">
      <Formulario />
      <Precio moneda="ARS" valor="2133" />
      <Fecha fecha={Date.now()} />
      <Pagina actual="60" maximo="100" />
      <Puntaje puntaje={3} />
      <Alert status="success" mensaje="Chakra is going live on August 30th. Get ready!" />
      <ListaStock productos={productos} />
    </div>
  );
}

export default App;
