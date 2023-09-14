import React, { useState }from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { ADD_CARD } from '../actions/actions';



// STYLING ---------------------------------------

// #85BCA4 sage green
// #008080
// #85BCA4
const MainContainer = styled.div`
    background-color: #008080;
    padding-left: 30px;
    padding-top: 20px;
    padding-bottom: 20px;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, .2)
`;
const Title = styled.div`
    font-size:  50px;
    color: #e9ffe1;
`;
const HeaderContainer = styled.div`
    margin-right: 20px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    flex-direction: column
    
`
const HeaderItem = styled.div`
    color: #e9ffe1  
`

const HabitTitle = styled.div`
    display: fixed
`
const HabitsContainer = styled.div`

padding-left: 50px;
padding-right: 50px
padding-top: 100px;
padding-bottom: 800px;
    margin: 15px auto;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, .2)
`
// COMPONENTS/ACTIONS ---------------------------------------

// const AddCard = () => {
//     const [cardText, setCardText] = useState(''); // State for the card text
//     const dispatch = useDispatch();
  
//     const handleAddCard = () => {
//       // Dispatch an action to add the card to your Redux store
//       if (cardText.trim() !== '') {
//         dispatch({ type: ADD_CARD, payload: cardText });
//         setCardText(''); // Clear the input field
//       }
//     };
  
//     return (
//       <div>
//         <input
//           type="text"
//           value={cardText}
//           onChange={(e) => setCardText(e.target.value)}
//           placeholder="Enter card text"
//         />
//         <button onClick={handleAddCard}>Add Card</button>
//       </div>
//     );
//   };
  
{/* <div className = 'container'>
<div className = 'innerBox'> 
</div>
</div> */}
// RENDERING ---------------------------------------

const MyHabits = () => {
    const handleProgressClick = () => {
        console.log("progress clicked");
    };

    const handleLogoutClick = () => {
        console.log("logout clicked");
    };

    return (
    <>
        <MainContainer>
            <Title>Accomplish.</Title>
            <HeaderContainer>
                <HeaderItem onClick={handleProgressClick}>My Progress</HeaderItem>
                <HeaderItem onClick={handleLogoutClick}>Logout</HeaderItem>
            </HeaderContainer>
        </MainContainer>

       
        <HabitsContainer>
    
            <HabitTitle>
                Habits
            </HabitTitle>
        
        </HabitsContainer>
           
    </>
    )
}
export default MyHabits;

                   
                        
                        
     

