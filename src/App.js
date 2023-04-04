
import './App.css';
import ListaDeTareas from './components/ListaDeTareas';
import Tareas from './components/Tareas';
import freeCodeLogo from './img/fcc_primary_large.jpeg'

function App() {
  return (
    <div className="App">
      <div className='logo-container' >
        <img src={freeCodeLogo}
        className='code-logo' />
      </div>
      <div className='tareas-lista-principal' >
        <h1>Mis Tareas</h1>
        <ListaDeTareas/>
      </div>
    </div>
  );
}

export default App;
