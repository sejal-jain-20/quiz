import React from 'react';
import { useState } from 'react';
import Ques from './Data';
import End from './../End/End';
import "./quiz.css";
import {useHistory} from 'react-router-use-history';

const Quiz = () => {
  const[currQ,setcurrQ]=useState(0);
  const[score,setscore]=useState(0);
  const[correctAns,setcorrectAns]=useState(0);
  const[showResult,setshowResult]=useState(false);
  const[clicked,setclicked]=useState(false);
  const history=useHistory();
  const hanldleAnswrOption =(isCorrect)=>{
    if(isCorrect){
      setscore(score+5)
      setcorrectAns(correctAns+1)
    }
    setclicked(true)
  }

  const handleNextOptions=()=>{ 
    setclicked(false)
    const nextQ =currQ+1
    if(nextQ<Ques.length)
    {
      setcurrQ(nextQ)
    }
    else{
      setshowResult(true)
    }
  };
  
  const handleprevOptions=()=>{
    
      const prevQ = currQ-1
      if(prevQ>=0)
      {
        setcurrQ(prevQ)
      }
      else{
        setcurrQ(0);
        setscore(0);
        setcorrectAns(0);
        history.push('/');
      }
    }


  const handleplayAgain=()=>{
     setcurrQ(0);
     setscore(0);
     setcorrectAns(0);
     setshowResult(false);
  }

const handleExit=()=>{
  setcurrQ(0);
  setscore(0);
  setcorrectAns(0);
  history.push('/');
}



  return (
    <div className='main'>
       {showResult?(<End score={score} correctAns={correctAns} handleplayAgain={handleplayAgain}/>):( <>
    <div className='header-title'>

        <div className='que-count '>
          <span>Question {currQ+1}of{Ques.length}</span>
        <h5 className='currscr'>Score:{score}</h5>
        </div>
        <h2 className='ShowQue'>{Ques[currQ].queTitle}</h2>
    </div>
      
  
    <div className='Content'>
      {Ques[currQ].ansOption.map((ans,i)=>{
        return(
        <button
        className={`button ${clicked && ans.isCorrect?"correct":"button"}`}
        disabled={clicked} key ={i} onClick={()=>hanldleAnswrOption(ans.isCorrect)}>
          {ans.ansText}
          </button>
      );
      })}

    </div>
    <div className='Footer'>
        <div className='Tscr'>
        <button onClick={handleExit}>Exit quiz</button>
     
      </div>
      <div className='btns'>

       
       <button  onClick={handleprevOptions}>prev</button>
       <button disabled={!clicked} onClick={handleNextOptions}>Next</button>
      </div>
    </div>
    
    </>)}
      
    </div>
  )
}

export default Quiz
