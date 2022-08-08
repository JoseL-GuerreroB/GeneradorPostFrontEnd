import React, { useState } from 'react';
import { FaEdit, FaTrashAlt, FaExpand } from "react-icons/fa";
import "./Post.css";

export default function Post({titulo,des,url,fav}) {
  const [hoverImg, setHoverImg]=useState(false);
  const img = url;
  const imagenStl = {
    backgroundImage: `url("${img}")`
  }
  return (
    <div className={`area-post ${fav && 'favorito'}`} style={imagenStl} onMouseOver={() => setHoverImg(true)} onMouseLeave={() => setHoverImg(false)}>
      {
        !hoverImg ? 
          <div className={`barrera ${hoverImg ? "centro" : "normal"}`}>
          <h3>{titulo}</h3>
          <p>{des}</p>
        </div> : 
          <div className={`barrera ${hoverImg ? "centro" : "normal"}`}>
          <button className='btn btn-warning ms-2 me-2'><FaEdit className="h3"/></button>
            <button className='btn btn-primary ms-2 me-2'><FaExpand className="h3" /></button>
          <button className='btn btn-danger ms-2 me-2'><FaTrashAlt className="h3"/></button>
        </div>
      } 
      
    </div>
  )
}
