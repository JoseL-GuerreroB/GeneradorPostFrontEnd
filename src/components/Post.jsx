import React, { useState, useContext } from 'react';
import { FaEdit, FaTrashAlt, FaExpand } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import "./Post.css";

export default function Post({id,titulo,des,url,fav}) {
  const [hoverImg, setHoverImg]=useState(false);
  const {setDataToEdit, setIndPost, setActivado, setOperacion, verPost} = useContext(UserContext);
  const navegar = useNavigate();
  const imagenStl = {
    backgroundImage: `url("${url}")`
  }
  const editar = () => {
    setDataToEdit(true);
    setIndPost({
      id,
      tit: titulo,
      de: des,
      fav
    })
    navegar("/editar")
  }
  const elimPre = () => {
    setIndPost({
      _id: id,
      title: titulo, 
      fav
    });
    setOperacion(true);
    setActivado(true);
  }
  return (
    <div className={`area-post ${fav && 'favorito'}`} style={imagenStl} onMouseOver={() => setHoverImg(true)} onMouseLeave={() => setHoverImg(false)}>
      {
        !hoverImg ? 
          <>
            <div className={`barrera ${hoverImg ? "centro" : "normal"}`}>
              <h3>{titulo}</h3>
              <p>{des}</p>
            </div>
          </> : 
          <>
            <div className={`barrera ${hoverImg ? "centro" : "normal"}`}>
              <button className='btn btn-warning ms-2 me-2' onClick={editar}><FaEdit className="h3" /></button>
              <button className='btn btn-primary ms-2 me-2' onClick={()=>verPost(id)}><FaExpand className="h3" /></button>
              <button className='btn btn-danger ms-2 me-2' onClick={elimPre}><FaTrashAlt className="h3" /></button>
            </div>
          </>
      } 
    </div>
  )
}
