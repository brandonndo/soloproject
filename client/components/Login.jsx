import React from "react";
import { useState } from "react";
import '../stylesheets/login.css';
// * incomplete does not function yet, only for looks - doesn't link to BE yet
import styled from 'styled-components'; // Import styled-components
import { useNavigate } from 'react-router-dom';


// const CenteredContainer = styled.div `
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     height: 500px;
// `
const LoginContainer = styled.div`
    text-align: center;
    margin: 0 auto;
    max-width: 300px;
    padding: 20px;
    border: 1px solid #ccc;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Label = styled.label`
    margin-bottom: 10px;
`;

const Input = styled.input`
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

const SubmitButton = styled.input`
    width: 100%;
    padding: 10px;
    background-color: #008080;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    ransition: opacity 0.3s ease; /* Add opacity transition */
    &:hover {
      opacity: 0.8; /* Change opacity on hover */
    }
`;

const Login = () => {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission

        // Get the input values
        const username = document.querySelector('input[name="username"]').value;
        console.log(username);
        const password = document.querySelector('input[name="password"]').value;
        console.log(password);

        // Define the API endpoint and data
        const apiUrl = 'http://localhost:3000/getUser'; // Replace with your API URL

        const requestData = {
            username: username,
            password: password
        };
        console.log(JSON.stringify(requestData))

        // Make the API call using the fetch API
        fetch(apiUrl, {
            method: 'POST', // Change to the appropriate HTTP method (e.g., POST, GET)
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestData)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Handle the API response data here
            console.log(data);
            if(data.length === 0) {
                console.log("failed")
                navigate('/signup')
            } else {
                console.log("success")
                navigate('/habits')
            }
        })
        .catch(error => {
            // Handle any errors that occurred during the fetch
            console.error('There was a problem with the fetch operation:', error);
        });
    };
    return (
   
        <LoginContainer>
            <div>Login:</div>
            <Form onSubmit={handleSubmit}>
                <Label>
                    Username:
                    <Input type="text" name="username" />
                </Label>
                <Label>
                    Password:
                    <Input type="password" name="password" />
                </Label>
                <SubmitButton type="submit" value="Submit" />
            </Form>
        </LoginContainer>
  
    );
};

export default Login;







// const Login = () => {
//     return (
//         <div>
//         <div>Login:</div>
//         <form>
//             <div>
//             <label>
//                 Username:
//                 <input type="text" name="username" />
//             </label>
//             </div>
            
//             <label>
//                 Password:
//                 <input type="password" name="password" />
//             </label>
//             <input type="submit" value="Submit" />
//         </form>
//         </div>
//         );
//     };
    
    // export default Login;

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

    // const username = document.getElementById('username').value
    // const password = document.getElementById('password').value
    // try {
    //     const loginResults = await fetch('./login'. {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'Application/JSON'
    //       } ,
    //       body: JSON.stringify({
    //         username: `${username}`,
    //         password: `${password}`,
    //       })
    //     })
    //     const data = away loginResults.json()
    // }
    // const handlesubmit = async (e) => {
    //     e.preventDefault();

        // <>
        //     <form onSubmit={handleSubmit}>
        //         <label>
        //             Username:
        //             <input
        //                 type="text"
        //                 name="username"
        //                 value={username}
        //                 onChange={(e) => setUsername(e.target.value)}
        //             />
        //         </label>
        //         <label>
        //             Password:
        //             <input
        //                 type="password"
        //                 name="password"
        //                 value={password}
        //                 onChange={(e) => setPassword(e.target.value)}
        //             />
        //         </label>
        //         <input type="submit" value="Submit" />
            // </form>
        // </>
        




// return <div>
// Form
// Username:
// Password:
// Button
// http://localhost:3000/getUser
// </div>