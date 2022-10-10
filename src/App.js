import './App.css';
import {HashRouter} from 'react-router-dom';
import Cabecera from './components/Cabecera';
import Rutas from './components/Rutas';
import { useContext } from 'react';
import { UserContext } from './contexts/UserContext';
import Sesion from './components/Sesion'
import ValidProvider from './contexts/ValidContext';

function App() {
  const {logeado} = useContext(UserContext);
  return (
    <div className="App">
      <HashRouter>
        <ValidProvider>
          <Sesion />
          {logeado && <Cabecera />}
          <Rutas />
        </ValidProvider>
      </HashRouter>
    </div>
  );
}

export default App;
