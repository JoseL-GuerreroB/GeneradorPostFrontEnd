import React, { useContext, useState } from 'react';
import "./HomeOFav.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Post from "../components/Post.jsx";
import { CrudContext } from '../contexts/CrudContext';
import { useLocation, useNavigate } from 'react-router-dom';




export default function Home() {
  const limit = 8;
  const { datos } = useContext(CrudContext);
  const [antFin,setAntFin]=useState(0);
  const [pagina,setPagina]= useState(1);
  const postsN = datos.Usuarios[0].posts;
  let { search } = useLocation();
  let query = new URLSearchParams(search);
  let start = parseInt(query.get("postInicio")) || 1;
  let end = parseInt(query.get("postFin")) || limit;
  let navigate = useNavigate();
  const handlePrev = () => {
    navigate(`?postInicio=${start - limit}&postFin=${end - limit % 8 === 0 ? end - limit : antFin}`);
    setPagina(pagina-1);
  }
  const handleNext = () => {
    setAntFin(end);
    navigate(`?postInicio=${start + limit}&postFin=${end + limit <= postsN.length ? end + limit : postsN.length}`);
    setPagina(pagina+1);
  }
  return (
    <main>
      <div id='posts-grilla'>
        {
          postsN.length>0 ? postsN.map((post) => 
            <Post key={post._id} titulo={post.titulo} des={post.des} url={post.imagen.url} fav={post.fav} />
          ).slice(start-1,end) : <h2 className='sin-post'>No hay posts que mostrar</h2>
        }
      </div>
      {postsN.length>0 && 
      <div id='handle-posts'>
        <h2>Pagina {pagina}</h2>
        <div>
          {start > limit && <button className='btn btn-secondary' onClick={handlePrev}><FaAngleLeft className='h4' /></button>}
          <p className='h3'>Posts del {start} al {end}</p>
          {postsN.length > limit && end < postsN.length && <button className='btn btn-secondary' onClick={handleNext}><FaAngleRight className='h4' /></button>}
        </div>
      </div>}
    </main>
  )
}
