import React, { useContext, useEffect } from 'react'
import { UserContext } from '../contexts/UserContext';

export default function NotFoundPage() {
  const { setDataToEdit } = useContext(UserContext);
  useEffect(() => {
    setDataToEdit(false);
  }, [setDataToEdit]);
  
  return (
    <div>NotFoundPage</div>
  )
}
