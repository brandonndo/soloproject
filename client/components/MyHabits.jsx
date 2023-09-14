import React, { useState }from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';



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
    color: #fbfae7;
`;
const HeaderContainer = styled.div`
    margin-right: 20px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    flex-direction: column
    
`
const HeaderItem = styled.div`
    color: #fbfae7;
    cursor: pointer;

    padding-top: 5px;
    transition: opacity 0.3s ease; /* Add opacity transition */
    &:hover {
      opacity: 0.3; /* Change opacity on hover */
    }
`
// display: flex;
//     justify-content: flex-start

const HabitTitle = styled.div`
    margin: 20px 0; 
    padding-top: 20px;
    padding-bottom: 20px;
    font-size: 32px;
    text-align: center; 
    background-color: #008080;
    color: #fbfae7

`
const HabitsContainer = styled.div`
    flex-grow: 1;
    min-height: 1000px;
    padding-left: 50px;
    padding-right: 50px
    padding-top: 100px;
    margin: 15px auto;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, .2);
    display: flex;
    flex-direction: column;
    align items: center;
`
// border: 1px solid #ccc;
// border-radius: 5px;
// const BoxContainer = styled.div`
//     display: flex;
//     justify-content: space-evenly;
//     width: 70%;
//     margin: 20px auto;
//     background-color: #e9ffe1;
//     align-items: center;
//     padding-top: 80px;
//     flex-direction: column;

// `
const BoxContainer = styled.div`
display: flex;
justify-content: center;
width: 100%;
margin: 20px auto;
background-color: #fbfae7;
padding-top: 50px;
padding-bottom: 20px;
padding-right: 20px
align-items: center;
box-shadow: 5px 5px 15px rgba(0, 0, 0, .2)
`;



const Box = styled.div`
width: 50px;
height: 50px;
background-color: ${(props) => props.color};
cursor: pointer;
transition: box-shadow 0.3s ease;
border: 1px solid #ccc;
&:hover {
    background-color: lightgrey;
  }
`;

const BoxWithLabel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  cursor: pointer;
`;



const HabitInput = styled.input`
width: 200px;
height: 30px;
margin: 5px;
padding: 5px;
`;

const HabitInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
`;

const AddButton = styled.button`
  width: 60px;
  height: 30px;
  margin: 10px;
  background-color: #008080;
  color: #e9ffe1;
  border: none;
  cursor: pointer;
  color: #fff;

 
`;

// COMPONENTS/ACTIONS ---------------------------------------

// need to create a create habit -> creates whatever new habit with M-S, 
// boxes, and delete button
// write each of these 'templates'
// and put it all inside of our hahbits container

// RENDERING ---------------------------------------
const defaultColor = 'white';
const selectedColor = '#8ABD91'
const MyHabits = () => {
    const navigate = useNavigate();
    /*
    setState(data)
    useeffect(()=>fetch(/endpoint), [state])
    useEffect(cb, [state])
    */
    const [boxColors, setBoxColors] = useState([
        defaultColor,
        defaultColor,
        defaultColor,
        defaultColor,
        defaultColor,
        defaultColor,
        defaultColor
    ]);
    const handleBoxClick = (index) => {
        const newColors = [...boxColors];
        newColors[index] = newColors[index] === defaultColor ? selectedColor : defaultColor;
        setBoxColors(newColors);
    }
    const handleProgressClick = () => {
        console.log("progress clicked");
    };

    const handleLogoutClick = () => {

        console.log("logout clicked");
        navigate('/')
    };

    const [newHabit, setNewHabit] = useState('');
    const handleAddHabit = () => {
        // Here, you can add the logic to save the new habit in your data structure or state
        console.log('New habit:', newHabit);
    
        // Clear the input field after adding the habit
        setNewHabit('');
    }

    // use state to deconstruct variable, setstate (changes the initial stat)
    // assign the initial state

    // use effect passes in 1 cb, second arg (could be a state to an arraay )
    // is dependency (something to happen then to trigger cb) -> useEffect(cb, [state])
    

    return (
        <>
          <MainContainer>
            <Title>Accomplish.</Title>
            <HeaderContainer>
              <HeaderItem onClick={handleProgressClick}>My Progress</HeaderItem>
              <HeaderItem onClick={handleLogoutClick}>Logout</HeaderItem>
            </HeaderContainer>
          </MainContainer>
    
          <HabitTitle>Habits</HabitTitle>
    
          <HabitsContainer>
            different habits
            
            <BoxContainer>

            <>
            <HabitInputContainer>
                <HabitInput
                    type="text"
                    placeholder="enter a new habit!"
                    value={newHabit}
                    onChange={(e) => setNewHabit(e.target.value)}
                />
                <AddButton onClick={handleAddHabit}>Add</AddButton>
            </HabitInputContainer>
            </>
            
              {['Mon', 'Tue', 'Wed', 'Th', 'Fri', 'Sat', 'Sun'].map((day, index) => (
                <BoxWithLabel key={index} onClick={() => handleBoxClick(index)}>
                  <Box color={boxColors[index]} />
                  <div>{day}</div>
                </BoxWithLabel>
              ))}
            </BoxContainer>
          </HabitsContainer>
        </>
      );
    };
export default MyHabits;

                   
                        
                        
     

