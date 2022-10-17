import React from 'react';
import Ques from '../QuizSec/Data';

import './end.css';

const End = (props) => {
  return (
    <>
    <div className='message'>
        <h2>Congratulations You have completed the assessment.</h2>
        <h3 >Total Score :{props.score}/20</h3>
        <h3 >your correct Ques :{props.correctAns} out of {Ques.length}</h3>
        <button className='btn' onClick={props.handleplayAgain}>Play Again</button>
    </div>
    
    
    </>
  )
}

export default End