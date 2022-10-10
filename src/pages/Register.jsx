import React, { useContext, useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MsgError from '../components/MsgError';
import { UserContext } from '../contexts/UserContext';
import { ValidContext } from '../contexts/ValidContext';
import "./LogYReg.css";

export default function Register() {
  const navegar = useNavigate();
  const { datosUser, logeado,setLogeado, registro, editUser, errorUser } = useContext(UserContext);
  const {validar, enfoque, valRes, setValRes} = useContext(ValidContext);
  const [mostrarErrores, setMostrarErrores] = useState(false);
  const [mismaContraseña, setMismaContraseña] = useState(true);
  const [checkOn, setCheckOn] = useState(false);
  let name = useRef();
  let email = useRef();
  let password = useRef();
  let repassword = useRef();
  let imagen = useRef();
  let terms = useRef();

  useEffect(()=>{
    if (logeado) setCheckOn(true)
    else setCheckOn(false);
    return () => {
      const defaultRes = {
        nomb: true,
        corr: true,
        cont: true,
        cont2: true
      }
      setValRes(defaultRes);
    }
  },[logeado, setValRes]);
  const handleLogin = async (e) => {
    e.preventDefault();
    const datos = {
      name: name.current.value,
      email: email.current.value,
      password: password.current.value,
      repassword: repassword.current.value 
    }
    if(!logeado) {
      datos.terms = terms.current.checked;
      if (imagen.current.files[0]) {
        datos.image = imagen.current.files[0];
      }
      const result = await registro(datos);
      if (result === false) {
        navegar("/registro");
        setMostrarErrores(true);
        setTimeout(()=>setMostrarErrores(false), 3000);
      } else {
        setLogeado(true);
        navegar("/");
      }
    }else{
      if (imagen.current.files[0]) {
        datos.image = imagen.current.files[0];
      }
      const result = await editUser(datos);
      if (result === false) {
        navegar("/editarusuario");
        setMostrarErrores(true);
        setTimeout(() => setMostrarErrores(false), 3000);
      } else {
        navegar("/");
      }
    }
  }
  return (
    <div className='area-form'>
      {mostrarErrores && <div style={{
        position: "fixed",
        right: "10px",
        top: "70px"
      }}>
        {errorUser !== null && errorUser.errores && errorUser.errores.map((campo, index) => <MsgError key={index} tit="" msg={campo.msg} />)}
        {errorUser !== null && errorUser.error && <MsgError tit={errorUser.error} msg={errorUser.mensaje}/>}
      </div>}
      
      <h2>{logeado ? "Editar usuario" : "Registrate"}</h2>
      <form className='formulario' onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="Nom" >{logeado ? "Nuevo nombre" : "Nombre completo:"}</label>
          <input type="text" name='nomb' id='Nom' className='form-control' aria-describedby="msgNom" placeholder="Escribe tu nombre" ref={name} defaultValue={logeado ? datosUser.user.name : "" } onFocus={(e)=> enfoque(e.target.name) } onBlur={(e)=> validar(e.target.name, e.target.value)} />
          {valRes.nomb===false && <small id="msgNom" className="form-text">"Coloca un nombre valido"</small>}
        </div>
        <div className="form-group">
          <label htmlFor="Cor" >{logeado ? "Nuevo correo electronico" : "Correo electronico:"}</label>
          <input type="email" id='Cor' name="corr" className='form-control' aria-describedby="msgCor" placeholder="Escribe tu correo" ref={email} defaultValue={logeado ? datosUser.user.email : ""} onFocus={(e) => enfoque(e.target.name)} onBlur={(e) => validar(e.target.name, e.target.value)}  />
          {valRes.corr===false && <small id="msgCor" className="form-text">"Coloca un correo valido"</small>}
        </div>
        <div className="form-group">
          <label htmlFor="Fil" >{logeado ? "Nueva foto de perfil" : "Agregar foto de perfil:"}</label><br />
          <input type="file" id='Fil' className='form-control-file' aria-describedby="msgFil" name='image' ref={imagen}/><br />
        </div>
        <div className="form-group">
          <label htmlFor="Pas" >{logeado ? "Nueva contraseña" : "Contraseña:"}</label>
          <input type="password" id='Pas' name='cont' className='form-control' aria-describedby="msgPas" placeholder="Escribe tu contraseña" ref={password} defaultValue="" onFocus={(e) => {
            enfoque(e.target.name);
            setMismaContraseña(true);
          }} onBlur={(e) => {
            validar(e.target.name, e.target.value);
            setMismaContraseña(password.current.value === repassword.current.value);
          }} />
          {valRes.cont===false && <small id="msgPas" className="form-text">"Coloca una contraseña con un minimo de 8 caracteres"</small>}
        </div>
        <div className="form-group">
          <label htmlFor="Pas2" >{logeado ? "Confirmar nueva contraseña" : "Confirmar contraseña:"}</label>
          <input type="password" id='Pas2' name="cont2" className='form-control' aria-describedby="msgPas2" placeholder="Repite tu contraseña" ref={repassword} defaultValue="" onFocus={(e) => {
            enfoque(e.target.name);
            setMismaContraseña(true);
          }} onBlur={(e) => {
            validar(e.target.name, e.target.value);
            setMismaContraseña(password.current.value === repassword.current.value);
          }}  />
          {valRes.cont2 === false && <small id="msgPas" className="form-text">"Coloca una contraseña con un minimo de 8 caracteres"</small>}
        </div>
        {mismaContraseña === false && <p className='mt-3 errorM'>No coinsiden las contraseñas</p>}
        {!logeado && <div className="form-group">
          <label htmlFor="Ter" >Terminos y condiciones:</label>
          <input type="checkbox" className='ms-2' id='Ter' name='terms' ref={terms} onChange={() => setCheckOn(checkOn === true ? false : true)} /><br />
          <Link to={'/terminosyc'}>Leer terminos y condiciones</Link>
        </div>}<br />
        <div className="form-group">
          {logeado && <input type="button" className='me-2 btn btn-secondary' onClick={()=> navegar("/")} value="Regresar" />}
          {checkOn && <input type="submit" value={logeado ? "Actualizar" : "Enviar"} className={logeado ? 'btn btn-success' : 'btn btn-primary'} />}
          {!logeado && !checkOn && <input type="submit" value="Enviar" className="btn btn-primary" disabled/>}
        </div>
      </form>
      {!logeado && <><h4>¿Ya tienes una cuenta?</h4>
      <Link to={'/iniciar'} className="h5">Inicia sesión aquí</Link></>}
    </div>
  )
}
