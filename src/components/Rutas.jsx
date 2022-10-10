import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import CreateNew from '../pages/CreateNew';
import Favoritos from '../pages/Favoritos';
import NotFoundPage from '../pages/NotFoundPage';
import Register from '../pages/Register';
import Login from '../pages/Login';
import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import TerminosYCondiciones from '../pages/TerminosYCondiciones';

export default function Rutas() {
  const {logeado, dataToEdit} = useContext(UserContext);
  return (
    <Routes>
      <Route path='/' element={logeado ? <Home /> : <Navigate to="iniciar" />} />
      <Route path={!logeado ? 'registro' : 'editarusuario'} element={<Register />} />
      <Route path='iniciar' element={!logeado ? <Login /> : <Navigate to="/" />} />
      <Route path='terminosyc' element={!logeado ? <TerminosYCondiciones /> : <Navigate to="/" />} />
      <Route path={!dataToEdit ? "nuevo" : "editar"} element={logeado ? <CreateNew /> : <Navigate to="/iniciar" />} />
      <Route path='favoritos' element={logeado ? <Favoritos /> : <Navigate to="/iniciar" />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  )
}
