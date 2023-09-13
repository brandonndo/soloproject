// const path = require('path');
const express = require('express');
const app = express()
const mongoose = require('mongoose');
const UserModel = require('./models/users')
const HabitModel = require("./models/habits")

app.use(express.json());

mongoose.connect(
    "mongodb+srv://brandondo:q29o00G4he70xi48@cluster0.arxquxp.mongodb.net/bdoSoloProject?retryWrites=true&w=majority"
    ).then(() => {
        console.log("Server connected");
    }
    ).catch(function (err) {
        console.log(err);
    })
// can refactor to include each controller and model -> controller for logic, model for res.status().json(res...)
// in postman: post req http://localhost:3000/getUser -> input username/login and password -> get rest of data 
app.post('/getUser', (req, res) => {
    const userData = req.body
    UserModel.find(userData).then(users => {
        res.json(users); 
      })
      .catch(err => {
        res.status(500).json({ error: err.message }); 
      });
});

app.post('/signUp', (req, res) => {
    const userData = req.body
    UserModel.create(userData).then(response => {
        res.json(response);
    })
    .catch(err => {
        res.status(500).json({ error: err.message }); 
    })
  });


const name = "Brandon Do"

app.post('/addHabit', (req, res) => {
    const habitData = req.body
    // you combine habitData with name
    habitData['user'] = name;
    HabitModel.create(habitData).then(response => {
        res.json(response);
    })
    .catch(err => {
        res.status(500).json({ error: err.message }); 
    })
})

// post req http://localhost:3000/getHabits -> input user -> get all habits
app.post('/getHabits', (req, res) => {
    const habitData = req.body
    // you combine habitData with name
    habitData['user'] = name;
    HabitModel.find(habitData).then(habits => {
        res.json(habits); 
      })
      .catch(err => {
        res.status(500).json({ error: err.message }); 
      });
});


app.listen(3000, () => {
    console.log(`SERVER RUNNING!`);
});

module.exports = app;



// mongo : brandondo, passs q29o00G4he70xi48