import React from 'react';
import { useContext } from 'react';
import {NavLink} from 'react-router-dom';
import { FaUserAlt } from "react-icons/fa";
import { UserContext } from '../contexts/UserContext';
import './Cabecera.css';

export default function Cabecera() {
  const {desplegado,setDesplegado} = useContext(UserContext);
  const handleClick = ()=> {
    if(desplegado===true) setDesplegado(false)
    else setDesplegado(true);
  }
  return (
    <header className='d-flex header-content'>
      <h3 className='h3'>Generador de posts</h3>
      <nav className='d-flex'>
        <NavLink className="item h4 me-5" to={"/"} >Tus posts</NavLink>
        <NavLink className="item h4 me-5" to={"nuevo"} >Crear post</NavLink>
        <NavLink className="item h4 me-5" to={"favoritos"} >Favoritos</NavLink>
      </nav>
      <button className={`btn btn-${!desplegado?"secondary":"light"} ps-5 pe-5`} onClick={handleClick}><FaUserAlt className="h3"/></button>
    </header>
  )
}
