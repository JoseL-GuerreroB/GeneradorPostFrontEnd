import {createContext, useEffect, useState} from 'react';

export const UserContext=createContext();

export default function UserProvider({children}) {
  const [logeado, setLogeado] = useState(false);
  const [desplegado, setDesplegado] = useState(false);
  useEffect(() => {
    const obtenerCookie = async cookieName => {
      let cookies = document.cookie;
      cookies = cookies.split(";");
      for (let i = 0; cookies.length > i; i++) {
        let cookie = cookies[i].trim();
        if (cookie.startsWith(cookieName)) {
          setLogeado(true);
          return;
        }
      }
      setLogeado(false);   
    }
    obtenerCookie("token");
  }, [logeado]);
  const valor = {
    logeado,
    setLogeado,
    desplegado,
    setDesplegado
  }
  return <UserContext.Provider value={valor}>{children}</UserContext.Provider>
}
