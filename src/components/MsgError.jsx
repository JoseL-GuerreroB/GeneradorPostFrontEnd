import React from 'react';
import './MsgError.css';

export default function MsgError({tit,msg}) {
  if (tit==="") {
    return (
      <div className='msgError'>
        <h4>{msg}</h4>
      </div>
    )
  } else {
    return (
      <div className='msgError'>
        <h4>{tit}</h4>
        <p className='errorM'>{msg}</p>
      </div>
    )
  }
  
}
