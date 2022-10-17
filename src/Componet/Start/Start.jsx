import React from 'react';
import { Link } from 'react-router-dom';
import './Start.css';

const Start = () => {
  return (
    <>
    <div className='title'>
      <h1>Object-Oriented Programming Quiz</h1>
      
    </div>
    <div className='btn'>
      <Link to='/Quiz'>
      <button className='sbtn'>Start</button>
  </Link>
    </div>
   
    </>
  )
}

export default Start;
