import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyHabits from '../components/MyHabits';
import SignUp from '../components/SignUp';
import Login from '../components/Login';
import '../stylesheets/styles.css';


const App = () => {

    return (
       <> 
        <Routes>
            <Route path = '/' element={<Login/>} />
            <Route path ='/habits' element={<MyHabits/>} />
            <Route path = '/signup' element={<SignUp/>} />
        </Routes>
        </> 
    )
};

export default App;


