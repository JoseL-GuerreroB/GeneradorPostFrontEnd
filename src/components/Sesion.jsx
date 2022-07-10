import React,{ useContext } from 'react';
import { CrudContext } from '../contexts/CrudContext';
import { UserContext } from '../contexts/UserContext';
import { BtnEditar, BtnEliminar, BtnLogout } from './BtnHandle';
import "./Sesion.css";

export default function Sesion() {
  const {desplegado}=useContext(UserContext);
  const {datos} = useContext(CrudContext);
  return (
    <div id="sesion-contenedor" className={desplegado?"activo":"inactivo"}>
      <img src={datos.Usuarios[0].Url_foto.url} alt="por defecto" />
      <h2>{datos.Usuarios[0].nombre}</h2>
      <h3>{datos.Usuarios[0].correo}</h3>
      <div>
        <BtnEditar />
        <BtnLogout />
        <BtnEliminar />
      </div>
      
    </div>
  )
}
