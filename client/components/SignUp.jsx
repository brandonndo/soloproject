import React from "react";
import '../stylesheets/signup.css';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

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
    background-color: #8a2be2;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: opacity 0.3s ease; /* Add opacity transition */
    &:hover {
      opacity: 0.8; /* Change opacity on hover */
    }
`;

const SignUp = () => {
    const navigate = useNavigate();
    
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission

        // Get the input values
        const username = document.querySelector('input[name="username"]').value;
        console.log(username);
        const password = document.querySelector('input[name="password"]').value;
        console.log(password);

        // Define the API endpoint and data
        const apiUrl = 'http://localhost:3000/signUp'; // Replace with your API URL
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
            navigate('/')
            return response.json();
        })
        // .then(data => {
        //     // Handle the API response data here
        //     // navigate('/')
        //     console.log(data);
        // })
        .catch(error => {
            // Handle any errors that occurred during the fetch
            console.error('There was a problem with the fetch operation:', error);
        });
    };
    return (
        <LoginContainer>
            <div>
            Sign Up
            </div>
            
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

}

// const submitButton = document.querySelector('input[type="submit"]');
// console.log(submitButton)
const signUp = () => {
    console.log("here")
}
// submitButton.addEventListener('click', function (event) {
//     event.preventDefault(); // Prevent the default form submission

//     // Get the input values
//     const username = document.querySelector('input[name="username"]').value;
//     console.log(username);
//     const password = document.querySelector('input[name="password"]').value;
//     console.log(password);

//     // Define the API endpoint and data
//     const apiUrl = 'https://localhost:3000/signUp'; // Replace with your API URL
//     const requestData = {
//         username: username,
//         password: password
//     };

//     // Make the API call using the fetch API
//     fetch(apiUrl, {
//         method: 'POST', // Change to the appropriate HTTP method (e.g., POST, GET)
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(requestData)
//     })
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         return response.json();
//     })
//     .then(data => {
//         // Handle the API response data here
//         console.log(data);
//     })
//     .catch(error => {
//         // Handle any errors that occurred during the fetch
//         console.error('There was a problem with the fetch operation:', error);
//     });
// });

export default SignUp;

{/* Form
Name:
Username:
Password:
Button
http://localhost:3000/signUp */}