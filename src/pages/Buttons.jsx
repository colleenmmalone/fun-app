import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Buttons.scss';

// add your routes to the linkes below 

export const Buttons = () => {
    return (
        <div className='page-container'>

            <h1>Click something!</h1>
            
            <Link to="/colleen">
                <button className='btn-main' id='colleen'>CMM</button><br />
            </Link>

            <Link to="/">
                <button className='btn-main' id='hh'>HH</button><br />
            </Link>

            <Link to="/">
                <button className='btn-main' id='jz'>JZ</button><br />
            </Link>

            <Link to="/">
                <button className='btn-main' id='jc'>JC</button><br />
            </Link>

            <Link to="/">
                <button className='btn-main' id='mt'>MT</button><br />
            </Link>

            <Link to="/">
               <button className='btn-main' id='cm'>CM</button><br />
            </Link>

            <Link to="/">
                <button className='btn-main' id='ay'>AY</button><br />
            </Link>

        </div>
    )
};

