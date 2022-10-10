import React, { useContext, useState, useEffect } from 'react';
import "./HomeOFav.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Post from "../components/Post.jsx";
import { UserContext } from '../contexts/UserContext';
import { useLocation, useNavigate } from 'react-router-dom';
import Ventana from '../components/Ventana';



export default function Favoritos() {
  const { activado, postUser, logeado, setDataToEdit } = useContext(UserContext);
  const favPost = postUser.filter(el => el.fav===true);
  const [antFin, setAntFin] = useState(0);
  const limit = favPost.length >= 8 ? 8 : favPost.length;
  const [pagina, setPagina] = useState(1);
  let { search } = useLocation();
  let query = new URLSearchParams(search);
  let start = parseInt(query.get("postInicio")) || 1;
  let end = query.get("postFin") ? parseInt(query.get("postFin")) : limit;
  let navigate = useNavigate();
  useEffect(() => {
    setDataToEdit(false);
  }, [setDataToEdit]);
  const handlePrev = () => {
    navigate(`?postInicio=${start - limit}&postFin=${(end - limit) % 8 === 0 ? end - limit : antFin}`);
    setPagina(pagina - 1);
  }
  const handleNext = () => {
    setAntFin(end);
    navigate(`?postInicio=${start + limit}&postFin=${end + limit <= favPost.length ? end + limit : favPost.length}`);
    setPagina(pagina + 1);
  }
  return (
    <main>
      { activado && <Ventana /> }
      <div id='posts-grilla'>
        {
          (logeado && favPost.length > 0) ? favPost.map((post) =>
            <Post key={post._id} id={post._id} titulo={post.title} des={post.desc} url={post.image.url} fav={post.fav} />
          ).slice(start - 1, end) : <h2 className='sin-post'>No hay posts que mostrar</h2>
        }
      </div>
      {logeado && favPost.length > 0 &&
        <div id='handle-posts'>
          <h2>Pagina {pagina}</h2>
          <div>
            {start > limit && <button className='btn btn-secondary' onClick={handlePrev}><FaAngleLeft className='h4' /></button>}
            <p className='h3'>Posts del {start} al {end}</p>
            {favPost.length > limit && end < favPost.length && <button className='btn btn-secondary' onClick={handleNext}><FaAngleRight className='h4' /></button>}
          </div>
        </div>}
    </main>
  )
}
