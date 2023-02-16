import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './Login.css';
import Login from './Login';
import Register from './Register';
function App() {
  return (
     <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<Login />} />
            <Route exact path='/register' element={<Register />} />
        </Routes>
    </BrowserRouter>
  );
}
export default App;
