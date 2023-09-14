// import React from "react";
// import { useState } from "react";
// import '../stylesheets/login.css';
// const Login = () => {
//     return (
//     <>
//         <form>
//         <label>
//             username:
//             <input type="text" name="name" />
//         </label>
//         </form>
//         <form>
//         <label>
//             password:
//             <input type="text" name="name" />
//         </label>
//         <input type="submit" value="Submit" />
//         </form>
//     </>
//     )
// };
import React, { useState } from "react";
import '../stylesheets/login.css';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

    //     try {
    //         const response = await fetch('/login', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({ username, password }),
    //         });

    //         if (response.ok) {
    //             // Login was successful
    //             console.log('Login successful');
    //             // You can redirect the user to a different page or perform other actions here.
    //         } else {
    //             // Login failed, handle the error
    //             console.error('Login failed');
    //         }
    //     } catch (error) {
    //         console.error('Error:', error);
    //     }
    // };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input
                        type="text"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </label>
                <label>
                    Password:
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </>
    );
};

}

export default Login;

// return <div>
// Form
// Username:
// Password:
// Button
// http://localhost:3000/getUser
// </div>