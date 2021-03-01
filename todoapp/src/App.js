
import { Public } from './screens/Public'
import { Private } from './screens/Private'
import { useAuth } from './hooks'
import "./App.css";

const App = () => {

  const { isAuthenticated } = useAuth()

  console.log(isAuthenticated)

  return (isAuthenticated ? <Private /> : <Public />)
};

export default App;
