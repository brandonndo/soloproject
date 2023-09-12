import React from "react";
// import ReactDOM from "react-dom"; -- old way
import App from './App';
import { createRoot } from "react-dom/client"

const root = createRoot(document.getElementById('root'));
root.render( <App/>)


// ReactDOM.render(<App/>, document.querySelector('#root'));
// document.creatElementId('root') 