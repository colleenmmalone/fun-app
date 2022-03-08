import React from 'react';
import { Link } from 'react-router-dom';
//import '../scss/YourNameHere.scss';

// add all your stylings to yourname-container so it does not affect other people's pages
// I have page-container here incase we add a navBar later and need to adjust everyone's pages for it

// change BlankTemplate to YourName
export const BlankTemplate = () => {

  return (
    <div className="page-container">
      <div className="yourname-container">
        <p>make this page your own!</p>

        <Link to="/">
          <button className='btn-main'>back to main</button><br />
        </Link>
      </div>
    </div>
  )
};