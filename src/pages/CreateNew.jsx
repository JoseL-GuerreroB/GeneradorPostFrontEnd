import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./LogYReg.css";


export default function CreateNew() {
  const navegar = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    navegar("/");
  }
  return (
    <div className='area-form'>
      <h2>Crea un nuevo Post</h2>
      <form className='formulario' onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="Cor" >Titulo</label>
          <input type="email" id='Cor' className='form-control' aria-describedby="msgCor" placeholder="Escribe tu correo" />
          <small id="msgCor" className="form-text text-muted">Mensaje</small>
        </div>
        <div className="form-group">
          <label htmlFor="Pas" >Descripción:</label>
          <input type="password" id='Pas' className='form-control' aria-describedby="msgPas" placeholder="Escribe tu contraseña" />
          <small id="msgPas" className="form-text text-muted">Mensaje</small>
        </div>
        <div className="form-group">
          <label htmlFor="Fil" >Imagen:</label><br />
          <input type="file" id='Fil' className='form-control-file' aria-describedby="msgFil" /><br />
          <small id="msgFil" className="form-text text-muted">Mensaje</small>
        </div>
        <div className="form-group">
          <input type="submit" value="Crear Post" className='btn btn-primary' />
        </div>
      </form>
    </div>
  )
}
