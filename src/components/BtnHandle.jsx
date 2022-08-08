import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';


export function BtnLogout() {
  const navegar = useNavigate();
  const { setDesplegado } = useContext(UserContext);
  const handleClick = () => {
    setDesplegado(false);
    setTimeout(()=>{
      setLogeado(false);
      navegar("/iniciar");
    },300)
  }
  const {setLogeado} = useContext(UserContext);
  return (
    <button className='btn btn-secondary ms-2 me-2' onClick={handleClick}>Cerrar Sesión</button>
  )
}

export function BtnEliminar() {
  const { setLogeado } = useContext(UserContext);
  const navegar = useNavigate();
  const { setDesplegado } = useContext(UserContext);
  const handleClick = () => {
    setDesplegado(false);
    setTimeout(() => {
      setLogeado(false);
      navegar("/registro");
    }, 300)
  }
  return (
    <button className='btn btn-danger ms-2 me-2' onClick={handleClick}>Eliminar perfil</button>
  )
}

export function BtnEditar() {
  const navegar = useNavigate();
  const { setDesplegado } = useContext(UserContext);
  const handleClick = () => {
    setDesplegado(false);
    setTimeout(() => {
      navegar("/editarusuario");
    }, 300)
  }
  return (
    <button className='btn btn-warning ms-2 me-2' onClick={handleClick}>Editar Sesión</button>
  )
}
