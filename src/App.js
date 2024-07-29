import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './components/Login';
import Exam from './components/Exam';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path = '/' element = {<Login/>}/>
      <Route path = '/Exam' element = {<Exam/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
