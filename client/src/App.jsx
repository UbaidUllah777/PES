import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './pages/About';
import Signin from './pages/Signin';
import SignUp from './SignUp';
import CaseStudies from './CaseStudies';
import Dashboard from './Dashboard';
import Header from './components/Header'
import Services from './pages/Services';
import Careers from './pages/Careers'

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
        <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/sign-in' element={<Signin/>}></Route>
        <Route path='/sign-up' element={<SignUp/>}></Route>
        <Route path='/services' element={<Services/>}></Route>
        <Route path='/case-studies' element={<CaseStudies/>}></Route>
        <Route path='/careers' element={<Careers/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        </Routes>
    </BrowserRouter>
  );
}
