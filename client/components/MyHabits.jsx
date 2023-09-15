import React, { useState, useEffect }from 'react';
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
width: 75%;
margin: 20px auto;
background-color: #fbfae7;
padding-top: 50px;
padding-bottom: 20px;
padding-right: 20px
align-items: center;
box-shadow: 5px 5px 15px rgba(0, 0, 0, .2)
`;


// &:hover {
//     background-color: lightgrey;
//   }
const Box = styled.div`
width: 50px;
height: 50px;
background-color: ${(props) => props.color};
cursor: pointer;
transition: box-shadow 0.3s ease;
border: 1px solid #ccc;

`;

const BoxWithLabel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  cursor: pointer;
`;



const HabitInput = styled.input`
padding: 5px;
width: 200px;
height: 30px;
margin: 20px;
`;

const HabitText = styled.div`
width: 100px;
height: 30px;
`;

const HabitInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
`;

const AddButton = styled.button`
  width: 60px;
  height: 30px;
 
  background-color: #008080;
  color: #e9ffe1;
  border: none;
  cursor: pointer;
  color: #fff;
  border-radius: 5px;
    transition: opacity 0.3s ease; 
    &:hover {
      opacity: 0.8; 
    }

 
`;

const DeleteButton = styled.button`
  width: 60px;
  height: 30px;
 
  background-color: #B22222;
  color: #e9ffe1;
  border: none;
  cursor: pointer;
  color: #fff;
  border-radius: 5px;
    transition: opacity 0.3s ease; 
    &:hover {
      opacity: 0.8; 
    }

 
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
    useEffect(() => {
      // This function will be called when the component loads
      getHabits();
    }, []);
    /*
    setState(data)
    useeffect(()=>fetch(/endpoint), [state])
    useEffect(cb, [state])
    */
    const [habits, setHabits] = useState([]);

    const [boxColors, setBoxColors] = useState([]);
    const handleBoxClick = (dayIndex, index) => {
        const allColors = [...boxColors];
        const newColors = allColors[index]
        newColors[dayIndex] = newColors[dayIndex] === defaultColor ? selectedColor : defaultColor;
        allColors[index] = newColors;
        setBoxColors(allColors);
    }
    const handleProgressClick = () => {
        console.log("progress clicked");
    };

    const handleLogoutClick = () => {

        console.log("logout clicked");
        navigate('/')
    };
    const getHabits = () => {
      // Call your function here
      const apiUrl = 'http://localhost:3000/getHabits'; // Replace with your API URL
        const requestData = {
            username: "brandon",
        };

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
            const habits = []
            const colors = []
            const allColors = [...boxColors];
            for(const habit in data) {
              habits.push(data[habit].habit)
              if(habit >= allColors.length) {
                  allColors.push([
                    defaultColor,
                    defaultColor,
                    defaultColor,
                    defaultColor,
                    defaultColor,
                    defaultColor,
                    defaultColor
                ])
              }
            }
            setBoxColors(allColors);
            setHabits(habits);
        })
        .catch(error => {
            // Handle any errors that occurred during the fetch
            console.error('There was a problem with the fetch operation:', error);
        });
    };

    const [newHabit, setNewHabit] = useState('');
    const handleAddHabit = async (event) => {
        // Here, you can add the logic to save the new habit in your data structure or state
        console.log('New habit:', newHabit);
    
        // Clear the input field after adding the habit
        // event.preventDefault(); // Prevent the default form submission

        // Get the input values
        const habit = document.querySelector('input[name="habit"]').value;
        console.log(habit);

        // Define the API endpoint and data
        const apiUrl = 'http://localhost:3000/addHabit'; // Replace with your API URL
        const requestData = {
            username: "brandon",
            habit: habit
        };
        console.log(JSON.stringify(requestData))

        // Make the API call using the fetch API
        await fetch(apiUrl, {
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
        // .then(data => {
        //     // Handle the API response data here
        //     // navigate('/')
        //     console.log(data);
        // })
        .catch(error => {
            // Handle any errors that occurred during the fetch
            console.error('There was a problem with the fetch operation:', error);
        });
        getHabits();
        // setNewHabit('');
    }
    const handleDeleteHabit = async (item) => {
      // Here, you can add the logic to save the new habit in your data structure or state
  
      // Clear the input field after adding the habit
      // event.preventDefault(); // Prevent the default form submission

      // Get the input values
      console.log(item);

      // Define the API endpoint and data
      const apiUrl = 'http://localhost:3000/deleteHabit'; // Replace with your API URL
      const requestData = {
          username: "brandon",
          habit: item
      };

      // Make the API call using the fetch API
      await fetch(apiUrl, {
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
      // .then(data => {
      //     // Handle the API response data here
      //     // navigate('/')
      //     console.log(data);
      // })
      .catch(error => {
          // Handle any errors that occurred during the fetch
          console.error('There was a problem with the fetch operation:', error);
      });
      getHabits();
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
           
            <>
            <HabitInputContainer>
                <HabitInput
                    type="text"
                    placeholder="enter a new habit!"
                    value={newHabit}
                    name="habit"
                    onChange={(e) => setNewHabit(e.target.value)}
                />
                <AddButton onClick={handleAddHabit}>new</AddButton>
            </HabitInputContainer>
            </>
              
            {habits.map((item, index) => {
                return (
                  <BoxContainer key={index}>
                    <HabitText>{item}</HabitText>
                      {['Mon', 'Tue', 'Wed', 'Th', 'Fri', 'Sat', 'Sun'].map((day, dayIndex) => (
                        <BoxWithLabel key={dayIndex} onClick={() => handleBoxClick(dayIndex, index)}>
                          <Box color={boxColors[index][dayIndex]} />
                          <div>{day}</div>
                        </BoxWithLabel>
                    ))}
                    <DeleteButton onClick={() => handleDeleteHabit(item)}>Delete</DeleteButton>
                  </BoxContainer>
              )
            })}
          </HabitsContainer>
        </>
      );
    };
export default MyHabits;

                   
                        
                        
     

