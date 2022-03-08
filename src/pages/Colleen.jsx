import React from 'react';
import { Link } from 'react-router-dom';

// internal components and assets
import MusicPlayer from '../components/MusicPlayer';
import song from '../songs/in-the-hall-of-the-mountain-king.mp3';

// scss
import '../scss/Colleen.scss';

export const Colleen = () => {

  return (
    <div className='page-container'>
      <div className='colleen-container'>

        <MusicPlayer song={song} />

        <p>hello! i like pink</p>

        <Link to="/">
          <button className='btn-main'>back to main</button><br />
        </Link>
      </div>
    </div>
  )
};