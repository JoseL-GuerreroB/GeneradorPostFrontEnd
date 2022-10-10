import React, { useContext, useState } from 'react';
import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MsgError from '../components/MsgError';
import { UserContext } from '../contexts/UserContext';
import "./LogYReg.css";

export default function Login() {
  const navegar = useNavigate();
  const { setLogeado, login, errorUser } = useContext(UserContext);
  const [mostrarErrores, setMostrarErrores] = useState(false);
  let email = useRef();
  let password = useRef();
  
  const handleLogin = async (e) => {
    e.preventDefault();
    let datos = {
      email: email.current.value,
      password: password.current.value
    }
    const result = await login(datos);
      if (result === false) {
        navegar("/iniciar");
        setMostrarErrores(true);
        setTimeout(() => setMostrarErrores(false), 3000);
      } else {
        setLogeado(true);
        navegar("/");
      }
  }
  return (
    <div className='area-form'>
      <h2>Inicia sesión</h2>
      <form className='formulario' onSubmit={handleLogin}>
        {mostrarErrores && <div style={{
          position: "fixed",
          right: 0,
          top: 0
        }}>
          {errorUser !== null && errorUser.errores && errorUser.errores.map((campo, index) => <MsgError key={index} tit="" msg={campo.msg} />)}
          {errorUser !== null && errorUser.error && <MsgError tit={errorUser.error} msg={errorUser.mensaje} />}
        </div>}
        <div className="form-group">
          <label htmlFor="Cor" >Correo:</label>
          <input type="email" id='Cor' className='form-control' placeholder="Escribe tu correo" ref={email}/>
        </div>
        <div className="form-group">
          <label htmlFor="Pas" >Contraseña:</label>
          <input type="password" id='Pas' className='form-control' placeholder="Escribe tu contraseña" ref={password} />
        </div>
        <div className="form-group">
          <input type="submit" value="Iniciar Sesión" className='btn btn-primary mt-3' />
        </div>
      </form>
      <h4>¿Aún no tienes una cuenta?</h4>
      <Link to={'/registro'} className="h5">Registrate aquí</Link>
    </div>
  )
}

