import React from 'react';
import { useContext } from 'react';
import { FaRegWindowClose } from 'react-icons/fa';
import { UserContext } from '../contexts/UserContext';
import './Ventana.css'

export default function Ventana() {
  const { indPost, activado, setActivado, operacion, elimPost } = useContext(UserContext);
  const eliminar = () => {
    elimPost(indPost._id);
    setActivado(false);
  }
  return (
    <div className={`preElim-${activado === true ? "active" : "null"}`}>
      {operacion ?
        <div className="contenedor">
          { indPost.fav===false ?
            <>
              <h4>Estas seguro de que deseas eliminar el post: <span>"{indPost.title}"</span></h4>
              <div>
                <button className="btn btn-warning" onClick={() => setActivado(false)}>Cancelar</button>
                <button className="btn btn-danger" onClick={eliminar}>Eliminar</button>
              </div>
            </> :
            <>
              <h4>No puedes eliminar Posts favoritos.</h4>
              <div>
                <button className="btn btn-primary" onClick={() => setActivado(false)}>Aceptar</button>
              </div>
            </>
          }
        </div> :
        <div className='imgCont'>
          <div className='cabG'>
            <h4>Fecha de creación: {indPost.created} </h4>
            <button className="btn btn-danger" onClick={() => setActivado(false)}><FaRegWindowClose className='iconoX' /></button>
          </div>
          <div className='imgG'>
            <div className={`areaP ${indPost.fav === true && "favorito"}`} style={{
              backgroundImage: `url("${indPost.image.url}")`
            }}>
              <h3>{indPost.title}</h3>
              <p>{indPost.desc}</p>
            </div>
          </div>
        </div>
      }
    </div>
  )
}
