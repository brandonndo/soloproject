import React from "react";
import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './components/App';

const root = createRoot(document.getElementById('root'));

root.render(
 <BrowserRouter>
   <App />
 </BrowserRouter>
);





// // {login ? <App /> : <SignUp />}

