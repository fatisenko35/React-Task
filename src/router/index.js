import React from 'react'
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import NavbarComponent from '../components/navbar';
import NotFound from '../components/NotFound';
import Detail from '../pages/Detail';
import Home from '../pages/Home';
import List from '../pages/List';
const AppRouter = () => {
  return (
    <Router>
        <NavbarComponent />
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='*' element={<NotFound/>} />
            <Route path='/list' element={<List/>} />
            <Route path='/details/:id' element={<Detail/>} />
        </Routes>
    </Router>
  )
}

export default AppRouter