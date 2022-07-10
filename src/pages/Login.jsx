import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import "./LogYReg.css";

export default function Login() {
  const navegar = useNavigate();
  const { setLogeado } = useContext(UserContext);
  const handleLogin = (e) => {
    e.preventDefault();
    setLogeado(true);
    navegar("/");
  }
  return (
    <div className='area-form'>
      <h2>Inicia sesión</h2>
      <form className='formulario' onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="Cor" >Nombre completo</label>
          <input type="email" id='Cor' className='form-control' aria-describedby="msgCor" placeholder="Escribe tu correo" />
          <small id="msgCor" className="form-text text-muted">Mensaje</small>
        </div>
        <div className="form-group">
          <label htmlFor="Pas" >Nombre completo</label>
          <input type="password" id='Pas' className='form-control' aria-describedby="msgPas" placeholder="Escribe tu contraseña" />
          <small id="msgPas" className="form-text text-muted">Mensaje</small>
        </div>
        <div className="form-group">
          <input type="submit" value="Iniciar Sesión" className='btn btn-primary' />
        </div>
      </form>
      <h4>¿Aún no tienes una cuenta?</h4>
      <Link to={'/registro'} className="h5">Registrate aquí</Link>
    </div>
  )
}

