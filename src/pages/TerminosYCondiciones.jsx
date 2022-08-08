import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./LogYReg.css";

export default function TerminosYCondiciones() {
  const navegar = useNavigate();
  return (
    <div className='area-form'>
      <h2>Terminos y condiciones</h2>
      <div className='formulario' style={{textAlign:"center", maxWidth:"800px"}}>
        <p>Esta aplicación solo es una práctica profesional. Se recomienda no brindar datos reales a la aplicación, bastara con llenar adecuadamente los campos requeridos para poder interactuar con la aplicación.</p>
        <p>No usar la aplicación para fines maliciosos</p>
        <p>Una vez termine de usar la aplicación y ya no te sea de utilidad, asegúrate de eliminar tu usuario del programa</p>
        <button onClick={()=> navegar("/registro")} className='btn btn-primary'>Aceptar</button>
      </div>
    </div>
  )
}
