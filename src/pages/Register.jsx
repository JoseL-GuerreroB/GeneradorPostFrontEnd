import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import "./LogYReg.css";

export default function Register() {
  const navegar = useNavigate();
  const { logeado,setLogeado } = useContext(UserContext);
  const handleLogin = (e) => {
    e.preventDefault();
    setLogeado(true);
    navegar("/");
  }
  return (
    <div className='area-form'>
      <h2>{logeado ? "Editar usuario" : "Registrate"}</h2>
      <form className='formulario' onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="Nom" >{logeado ? "Nuevo nombre" : "Nombre completo:"}</label>
          <input type="text" id='Nom' className='form-control' aria-describedby="msgNom" placeholder="Escribe tu nombre" />
          <small id="msgNom" className="form-text text-muted">Mensaje</small>
        </div>
        <div className="form-group">
          <label htmlFor="Cor" >{logeado ? "Nuevo correo electronico" : "Correo electronico:"}</label>
          <input type="email" id='Cor' className='form-control' aria-describedby="msgCor" placeholder="Escribe tu correo" />
          <small id="msgCor" className="form-text text-muted">Mensaje</small>
        </div>
        <div className="form-group">
          <label htmlFor="Fil" >{logeado ? "Nueva foto de perfil" : "Agregar foto de perfil:"}</label><br />
          <input type="file" id='Fil' className='form-control-file' aria-describedby="msgFil" /><br />
          <small id="msgFil" className="form-text text-muted">Mensaje</small>
        </div>
        <div className="form-group">
          <label htmlFor="Pas" >{logeado ? "Nueva contraseña" : "Contraseña:"}</label>
          <input type="password" id='Pas' className='form-control' aria-describedby="msgPas" placeholder="Escribe tu contraseña" />
          <small id="msgPas" className="form-text text-muted">Mensaje</small>
        </div>
        <div className="form-group">
          <label htmlFor="Pas2" >{logeado ? "Confirmar nueva contraseña" : "Confirmar contraseña:"}</label>
          <input type="password" id='Pas2' className='form-control' aria-describedby="msgPas2" placeholder="Repite tu contraseña" />
          <small id="msgPas2" className="form-text text-muted">Mensaje</small>
        </div>
        {!logeado && <div className="form-group">
          <label htmlFor="Ter" >Terminos y condiciones:</label>
          <input type="checkbox" className='ms-2' id='Ter' /><br />
          <Link to={'/terminosyc'}>Leer terminos y condiciones</Link>
        </div>}<br />
        <div className="form-group">
          <input type="submit" value={logeado ? "Actualizar" : "Iniciar Sesión"} className={logeado ? 'btn btn-success' : 'btn btn-primary'} />
        </div>
      </form>
      {!logeado && <><h4>¿Ya tienes una cuenta?</h4>
      <Link to={'/iniciar'} className="h5">Inicia sesión aquí</Link></>}
    </div>
  )
}
