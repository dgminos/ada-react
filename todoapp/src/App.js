
import './App.css';
import { Private } from './screens/Private';
import { Public } from './screens/Public';

const App = () => {
  const isAuthenticated = false;
  return (isAuthenticated ? <Private /> : < Public />
  );
}

export default App;
