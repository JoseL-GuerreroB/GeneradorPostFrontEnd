import { createContext } from 'react';
import User from "../API/User.json";

export const CrudContext = createContext();

export default function CrudProvider({ children }) {
  const datos = User;
  const valor = {
    datos
  }
  return <CrudContext.Provider value={valor}>{children}</CrudContext.Provider>
}