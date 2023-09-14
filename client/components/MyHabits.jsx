import React from 'react';
import styled from 'styled-components';
import { createSlice } from '@reduxjs/toolkit'


// #85BCA4 sage green
// #008080
// #85BCA4
const MainContainer = styled.div`
    display: flex;
    background-color: #008080;
    justify-content: center;
    align-items: center;
    padding-top: 30px;
    
`
const Title = styled.div`
    font-size:  50px;
    margin-bottom: 20%;
    padding-right: 60%;
    color: #e9ffe1
`;



const MyHabits = () => {
    return (
    <>
        <MainContainer>
            <Title>Accomplish.</Title>
           
        </MainContainer>
    </>
    )
}
export default MyHabits;


// const GridContainer = styled.div`
//     display: grid;
//     min-height: 100;
//     grid-template-column: 50%;
//     grid-template-rows: 1fr
// `;
// const NavContainer = styled.div`
//     grid-area: nav;
//     padding-top: 10px;
//     padding-left: 100px;
//     background-color: #008080;
// `;

// const MainContainer = styled.div`
//     display: flex;
// `;

// const Title = styled.div`
//     font-size:  30px;
//     margin-bottom: 100px;
//     color: #e9ffe1
// `;

// const HeaderContainer = styled.div`
//     display: flex;
//     justify-content: flex-end;
//     align-items: center;
//     color: #e9ffe1
// `;

// const HeaderItem = styled.div`
//     padding-right: 50px;
//     :last-child{
//         padding: 0
//     }
//     font-size: 18px
// `

// const MyHabits = () => {
//     return (
//         <GridContainer>
//             grid
//             <NavContainer>nav
//                 <Title>Accomplish.</Title>
//             </NavContainer>
//                 <MainContainer>  
//                     main
//                     <HeaderContiner>
//                         <HeaderItem>Your Progress</HeaderItem>
//                         <HeaderItem>Logout</HeaderItem>  
//                     </HeaderContiner>    
//                 </MainContainer>
//         </GridContainer>
//     )
// }