import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Colleen.scss';

export const Colleen = () => {
  
  return (
    <div className='page-container'>
      <div className='colleen-container'>
      <p>hello! i like pink</p>

      <Link to="/">
          <button className='btn-main'>back to main</button><br />
      </Link>
      </div>
    </div>
  )
};