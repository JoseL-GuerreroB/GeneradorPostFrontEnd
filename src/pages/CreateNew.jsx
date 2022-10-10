import React, { useContext, useRef  } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import { FaRegStar } from 'react-icons/fa';
import "./LogYReg.css";


export default function CreateNew() {
  let title = useRef();
  let desc = useRef();
  let image = useRef();
  const {nuevoPost, editPost, dataToEdit, indPost} = useContext(UserContext);
  const navegar = useNavigate();
  const changeFav = () => {
    indPost.fav === true ? indPost.fav = false : indPost.fav = true;
  }
  const handleLogin = (e) => {
    e.preventDefault();
    const datos = {
      title: title.current.value,
      desc: desc.current.value
    }
    if (image.current.files[0]){
      datos.image = image.current.files[0];
    }
    if(dataToEdit){
      datos.fav = indPost.fav;
      editPost(indPost.id,datos);
    } else {
      nuevoPost(datos);
    }
    navegar("/");
  }
  return (
    <div className='area-form'>
      <h2>{dataToEdit ? "Editar Post" : "Crea un nuevo Post"}</h2>
      <form className='formulario' onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="Tit" >Titulo</label>
          <input type="text" id='Tit' className='form-control mb-3' placeholder="Escribe el titulo" ref={title} defaultValue={dataToEdit ? indPost.tit : ""}/>
        </div>
        <div className="form-group">
          <label htmlFor="Des" >Descripción:</label>
          <input type="text" id='Des' className='form-control mb-1' placeholder="Escribe la descripción" ref={desc} defaultValue={dataToEdit ? indPost.de : ""}/>
        </div>
        {dataToEdit && <div className="form-group">
          <label htmlFor="Fav" >{indPost.fav===true ? "Quitar de" : "Añadir a"} favoritos:</label>
          <button id="Fav" className={`ms-2 btn btn-${indPost.fav === true ? "warning" : "secondary"}`} onClick={changeFav}><FaRegStar className={indPost.fav === true ? "fav2" : "fav"}/></button>
        </div>}<br />
        <div className="form-group">
          <label htmlFor="Fil" >Imagen:</label><br />
          <input type="file" id='Fil' className='form-control-file mb-3' ref={image} /><br />
        </div>
        <div className="form-group">
          <input type="submit" value={dataToEdit ? "Editar Post" : "Crear Post"} className={`btn btn-${dataToEdit ? "success" : "primary"}`} />
        </div>
      </form>
    </div>
  )
}
