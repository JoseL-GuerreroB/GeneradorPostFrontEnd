import React,{ useContext } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import { BtnEditar, BtnEliminar, BtnLogout } from './BtnHandle';
import "./Sesion.css";

export default function Sesion() {
  const { desplegado, datosUser, logeado, loading, setDesplegado, elimUser }=useContext(UserContext);
  const [adv, setAdv] = useState(false);
  const navegar = useNavigate();

  const advDel = () => setAdv(true);

  const deleteCuenta = () => {
    setDesplegado(false);
    elimUser();
    setAdv(false);
    navegar("/registro");
  }
  return (
    <div id="sesion-contenedor" className={desplegado?"activo":"inactivo"}>
      { logeado && !loading ?
        <>
          <img src={datosUser.user.image.url} alt="por defecto" />
          <h2>{datosUser.user.name}</h2>
          <h3>{datosUser.user.email}</h3>
        </> :
        <h2>Cargando...</h2>
      }
      {adv && 
        <div id='rec-elim'>
          <h4> ¿Estas seguro de eliminar tu cuenta? </h4>
          <button className='ms-2 me-2 btn btn-warning' onClick={()=> setAdv(false)}>Cancelar</button>
          <button className='ms-2 me-2 btn btn-danger' onClick={deleteCuenta}>Eliminar</button>
        </div>
      }
      <div id="rec-btn">
        <BtnEditar />
        <BtnLogout />
        <BtnEliminar elim={advDel}/>
      </div>
      
    </div>
  )
}
