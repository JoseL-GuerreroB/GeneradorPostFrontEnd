import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import axios from 'axios';
import "./LogYReg.css";
import { useState } from 'react';

export default function Login() {
  const navegar = useNavigate();
  const { setLogeado } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async(e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/auth/login", {
        email,
        password
      });
      console.log(res.data);
      setLogeado(true);
      navegar("/");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className='area-form'>
      <h2>Inicia sesión</h2>
      <form className='formulario' onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="Cor" >Correo:</label>
          <input type="email" id='Cor' className='form-control' aria-describedby="msgCor" placeholder="Escribe tu correo" value={email} onChange={e => {setEmail(e.target.value)}}/>
          <small id="msgCor" className="form-text text-muted">123</small>
        </div>
        <div className="form-group">
          <label htmlFor="Pas" >Contraseña:</label>
          <input type="password" id='Pas' className='form-control' aria-describedby="msgPas" placeholder="Escribe tu contraseña" value={password} onChange={e => setPassword(e.target.value)} />
          <small id="msgPas" className="form-text text-muted">123</small>
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

