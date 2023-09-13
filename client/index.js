import React from "react";

import App from './App';
import SignUp from './SignUp';
import { createRoot } from "react-dom/client"

const root = createRoot(document.getElementById('root'));

const user = null;
// API call to check if logged in
if(user) {
    root.render(<App/>)
    // from getUser api, should return user info
} else {
    root.render(<SignUp/>)
    // from signup api, should return user info
}
// root.render( <App/>)
