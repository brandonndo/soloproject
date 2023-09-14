import React from 'react';
import styled from 'styled-components';
import { createSlice } from '@reduxjs/toolkit'

// // if screen is smaller than 699px it disappears
// const DesktopContainer = styled.div`
//     @media only screen and (max-width: 699px){
//         display: none;
//     }
// `

// <>
//     <div>My Habits</div>
// </>

// #85BCA4 sage green

const GridContainer = styled.div`
    display: grid;
    min-height: 100;
    grid-template-column: 50%;
    grid-template-rows: 1fr
`;
// #008080
// #85BCA4
const NavContainer = styled.div`
    grid-area: nav;
    padding-top: 10px;
    padding-left: 100px;
    background-color: #008080;
`;

const MainContainer = styled.div`
    grid-area: main;
`;

const Title = styled.div`
    font-size:  30px;
    margin-bottom: 100px;
    color: #e9ffe1
`;

const HeaderContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: #e9ffe1
`;

const HeaderItem = styled.div`
    padding-right: 50px;
    :last-child{
        padding: 0
    }
    font-size: 18px
`

const MyHabits = () => {
    return (
        <GridContainer>
            <NavContainer>
                <Title>Accomplish.</Title>
            </NavContainer>
                <MainContainer>
                Main
                <HeaderContainer>
                        <HeaderItem>Your Progress</HeaderItem>
                        <HeaderItem>Logout</HeaderItem>
                    </HeaderContainer>
                   
                </MainContainer>
        </GridContainer>
    )
}

export default MyHabits;