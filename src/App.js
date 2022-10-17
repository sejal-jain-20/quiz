import React from "react";
import Start from "./Componet/Start/Start";
import End from "./Componet/End/End";
import QuizSec from "./Componet/QuizSec/Quiz";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />} exact>
          {" "}
        </Route>
        <Route path="/Quiz" element={<QuizSec />} exact>
          {" "}
        </Route>
        <Route path="/End" element={<End />} exact>
          {" "}
        </Route>
      </Routes>
      {/* <End/> */}
      {/* <QuizSec/> */}
    </BrowserRouter>
  );
};

export default App;
