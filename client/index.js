import React from "react";
import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './components/App';
import { Provider } from 'react-redux'
const root = createRoot(document.getElementById('root'));

// root.render(
// <Provider>
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// </Provider>

// );

root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  




// // {login ? <App /> : <SignUp />}

