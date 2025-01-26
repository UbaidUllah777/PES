import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './pages/About';
import Signin from './pages/Signin';
import SignUp from './SignUp';
import Projects from './Projects';
import Dashboard from './Dashboard';

export default function App() {
  return (
    <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/sign-in' element={<Signin/>}></Route>
        <Route path='/sign-up' element={<SignUp/>}></Route>
        <Route path='/projects' element={<Projects/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        </Routes>
    </BrowserRouter>
  );
}
