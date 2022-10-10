import { createContext, useState } from 'react';

export const ValidContext = createContext();

export default function ValidProvider({ children }) {
  const defaultRes = {
    nomb: true,
    corr: true,
    cont: true,
    cont2: true
  }
  const [valRes, setValRes] = useState(defaultRes);
  const campos = {
    nomb: /^([a-zA-zÀ-ÿñÑ]{3}[a-zA-zÀ-ÿñÑ]*|[a-zA-zÀ-ÿñÑ]{3}[a-zA-zÀ-ÿñÑ]*\s){1,4}$/g,
    corr: /^[a-zA-zÀ-ÿñÑ][a-zA-zÀ-ÿ0-9ñÑ._-]+@[a-zA-zñÑ]+\.[a-zA-zñÑ]{1,3}\s*$/g,
    cont: /^.{7}.+\s?$/g
  }
  const validar = (type,valor) => {
    let res;
    if (type==="nomb"){
      res=campos.nomb.test(valor);
    } else if (type==="corr"){
      res=campos.corr.test(valor);
    } else if (type==="cont" || type==="cont2"){
      res=campos.cont.test(valor);
    }
    setValRes({
      ...valRes,
      [type]: res
    });
  }
  const enfoque = (type) => {
    setValRes({
      ...valRes,
      [type]: true
    });
  }
  const valor = {
    valRes,
    setValRes,
    validar,
    enfoque
  }
  return <ValidContext.Provider value={valor}>{children}</ValidContext.Provider>
}