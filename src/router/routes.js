import React from 'react'
import { BrowserRouter,  Route, Routes, } from "react-router-dom";
import Login from '../Pages/Login/Login';
import Home from '../Pages/Home/Home';


const RouterApp = () => {
    return (
        
    <BrowserRouter>
    <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
    </Routes>
    </BrowserRouter>
    )
}
export default RouterApp;