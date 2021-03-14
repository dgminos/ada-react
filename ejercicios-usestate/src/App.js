import { P } from './components'
import { Collapse } from './components'
import './App.css';
import { ChevronUp } from 'react-bootstrap-icons'
import { ChevronDown } from 'react-bootstrap-icons'

const App = () => {


  return (
    <>
      <P />
      <p>Qué debo hacer para utilizar estado en React?
      <ChevronUp />
      </p>
      <Collapse label='+'>
        <p>
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
          <ChevronDown />
        </p>
      </Collapse>
    </>
  )
}

export default App;
