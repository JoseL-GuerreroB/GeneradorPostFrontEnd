import './App.css';
import {HashRouter} from 'react-router-dom';
import Cabecera from './components/Cabecera';
import Rutas from './components/Rutas';
import { useContext } from 'react';
import { UserContext } from './contexts/UserContext';
import Sesion from './components/Sesion'
import CrudProvider from './contexts/CrudContext';

function App() {
  const {logeado} = useContext(UserContext);
  return (
    <div className="App">
      <HashRouter>
        <CrudProvider>
          <Sesion />
          {logeado && <Cabecera />}
          <Rutas />
        </CrudProvider>
      </HashRouter>
    </div>
  );
}

export default App;
