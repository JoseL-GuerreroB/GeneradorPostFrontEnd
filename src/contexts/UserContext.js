import {createContext, useEffect, useState} from 'react';
import axios from 'axios';

export const UserContext=createContext();

export default function UserProvider({children}) {
  const urlBase = "http://localhost:5000/";
  const [logeado, setLogeado] = useState(false);
  const [desplegado, setDesplegado] = useState(false);
  const [loading, setLoading] = useState(false);
  const [datosUser, setDatosUser] = useState({});
  const [errorUser, setErrorUser] = useState([]);
  const [info, setInfo] = useState([900,""]);
  const [postUser, setPostUser] = useState({});
  const [dataToEdit, setDataToEdit] = useState(false);
  const [indPost, setIndPost] = useState({});
  const [activado, setActivado] = useState(false);
  const [operacion, setOperacion] = useState(true);
  const [tempo, setTempo] = useState(0);

  useEffect(() => {
    reSesion();
  }, []);

  const reSesion = async () => {
    try {
      setLoading(true);
      const res2 = await axios.get(`${urlBase}auth/presesion`, {
        withCredentials: true
      });
      if (res2.data.ok) {
        setInfo([res2.data.caducidad, res2.data.token]);
        const res3 = await axios.get(`${urlBase}auth/sesion`, {
          headers: {
            Authorization: "Bearer " + res2.data.token
          }
        });
        const res4 = await axios.get(`${urlBase}app/misPost`, {
          headers: {
            Authorization: "Bearer " + res2.data.token
          }
        });
        setLogeado(res3.data.sesion);
        setDatosUser(res3.data);
        setPostUser(res4.data);
        setErrorUser(null);
        setLoading(false);
        refresh();
      }
    } catch (error) {
      setLogeado(false);
      setErrorUser(error.response.data);
      setDatosUser({});
      setLoading(false);
    }
  }

  const refresh = () => {
    const st = setTimeout(() => {
      reSesion();
    }, (info[0]*1000)-5000);
    setTempo(st);
  }

  const registro = async (data) => {
    try {
      setLoading(true);
      const form = new FormData();
      for (let key in data) {
        form.append(key, data[key]);
      }
      const res = await axios.post(`${urlBase}auth/register`, form, {
        withCredentials: true
      });
      if (res.data.ok) {
        setErrorUser({});
        await reSesion();
      }
      return true;
    } catch (error) {
      setErrorUser(error.response.data);
      setLogeado(false);
      setLoading(false);
      return false;
    }
  }

  const login = async (data) => {
    try {
      setLoading(true);
      const form = new FormData();
      for (let key in data) {
        form.append(key, data[key]);
      }
      const res = await axios.post(`${urlBase}auth/login`, form, {
        withCredentials: true
      });
      if (res.data.ok){
        setErrorUser({});
        await reSesion();
      }
      return true;
    } catch (error) {
      setDatosUser({});
      setErrorUser(error.response.data);
      setLogeado(false);
      return false;
    }
  }

  const editUser = async (data) => {
    try {
      setLoading(true);
      const form = new FormData();
      for (let key in data) {
        form.append(key, data[key]);
      }
      const res = await axios.put(`${urlBase}auth/editUser`, form, {
          headers: {
            Authorization: "Bearer " + info[1]
          }
      })
      if(res.data.ok) {
        setDatosUser(res.data);
        setErrorUser(null);
        setLoading(false);
      }
      return true;
    } catch (error) {
      setErrorUser(error.response.data);
      setLoading(false);
      return false;
    }
  }

  const elimUser = async () => {
    try {
      const res = await axios.delete(`${urlBase}auth/elimUser`, {
        headers: {
          Authorization: "Bearer " + info[1]
        },
        withCredentials: true
      });
      if (res.data.ok){
        clearTimeout(tempo);
        setErrorUser(null);
        setPostUser({});
        setDatosUser({});
        setIndPost({});
        setLogeado(false);
      }
      console.log(res.data);
    } catch (error) {
      setErrorUser(error.response.data);
    }
  }

  const logout = async() => {
    try {
      const res = await axios.get(`${urlBase}auth/logout`, {
        headers: {
          Authorization: "Bearer " + info[1]
        },
        withCredentials: true
      });
      if (res.data.ok) {
        clearTimeout(tempo);
        setErrorUser(null);
        setPostUser({});
        setDatosUser({});
        setIndPost({});
        setLogeado(false);
      }
    } catch (error) {
      setErrorUser(error.response.data);
    }
  }

  const verPost = async (id) => {
    try {
      const res = await axios.get(`${urlBase}app/miPost/${id}`, {
        headers: {
          Authorization: "Bearer " + info[1]
        }
      });
      let post = res.data;
      const fechaMM = Date.parse(post.created);
      const nuevaFecha = new Date(fechaMM);
      const fechaSeg = nuevaFecha.getSeconds();
      const fechaMin = nuevaFecha.getMinutes();
      const fechaHor = nuevaFecha.getHours();
      const fechaDia = nuevaFecha.getDate();
      const fechaMes = nuevaFecha.getMonth() + 1;
      const fechaAño = nuevaFecha.getFullYear();
      post.created = `${fechaDia > 9 ? fechaDia : "0" + fechaDia}/${fechaMes > 9 ? fechaMes : "0" + fechaMes}/${fechaAño}   ${fechaHor}:${fechaMin > 9 ? fechaMin : "0" + fechaMin}:${fechaSeg > 9 ? fechaSeg : "0" + fechaSeg}`;
      setIndPost(post);
      setOperacion(false);
      setActivado(true);
      setErrorUser(null);
    } catch (error) {
      setErrorUser(error.response.data);
      setIndPost({});
    }
  }

  const nuevoPost = async (data) => {
    try {
      const form = new FormData();
      for (let key in data) {
        form.append(key, data[key]);
      }
      const res = await axios.post(`${urlBase}app/newPost`, form, {
        headers: {
          Authorization: "Bearer " + info[1]
        }
      });
      setPostUser([
        ...postUser,
        res.data
      ]);
      setErrorUser(null);
    } catch (error) {
      setErrorUser(error.response.data);
    }
  }

  const editPost = async (id, data) => {
    try {
      setLoading(true);
      const form = new FormData();
      for (let key in data) {
        form.append(key, data[key]);
      }
      const res = await axios.put(`${urlBase}app/editPost/${id}`, form, {
        headers: {
          Authorization: "Bearer " + info[1]
        }
      });
      const newPostUser = [];
      postUser.forEach(post => {
        if (post._id === res.data.newPost._id) {
          newPostUser.push(res.data.newPost);
        } else {
          newPostUser.push(post);
        }
      });
      setPostUser(newPostUser);
      setErrorUser(null);
      setDataToEdit(false);
      setLoading(false);
    } catch (error) {
      setErrorUser(error.response.data);
      setLoading(false);
    }
  }

  const elimPost = async (id) => {
    try {
      const res = await axios.delete(`${urlBase}app/elimPost/${id}`, {
        headers: {
          Authorization: "Bearer " + info[1]
        }
      });
      if(res.data.ok){
        const newUserPosts = postUser.filter(post => post._id!==id);
        setPostUser(newUserPosts);
        setErrorUser(null);
      }
    } catch (error) {
      setErrorUser(error.response.data);
    }
  }

  const valor = {
    datosUser,
    postUser,
    errorUser,
    logeado,
    setLogeado,
    desplegado,
    setDesplegado,
    loading,
    registro,
    login,
    editUser,
    elimUser,
    logout,
    verPost,
    nuevoPost,
    editPost,
    elimPost,
    dataToEdit,
    setDataToEdit,
    setIndPost,
    indPost,
    activado,
    setActivado,
    operacion,
    setOperacion
  }
  return <UserContext.Provider value={valor}>{children}</UserContext.Provider>
}
