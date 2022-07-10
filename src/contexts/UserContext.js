import {createContext, useState} from 'react';

export const UserContext=createContext();

export default function UserProvider({children}) {
  const [logeado, setLogeado]=useState(false);
  const [desplegado,setDesplegado]=useState(false);
  const valor = {
    logeado,
    setLogeado,
    desplegado,
    setDesplegado
  }
  return <UserContext.Provider value={valor}>{children}</UserContext.Provider>
}
