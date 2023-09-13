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

app.post('/getUser', (req, res) => {
    const userData = req.body
    UserModel.find(userData).then(users => {
        res.json(users); // Send the found users as a JSON response
      })
      .catch(err => {
        res.status(500).json({ error: err.message }); // Handle errors and send an error response
      });
});

app.post('/signUp', (req, res) => {
    // what should happen here on successful sign up?
    const userData = req.body
    UserModel.create(userData).then(response => {
        res.json(response);
    })
    .catch(err => {
        res.status(500).json({ error: err.message }); // Handle errors and send an error response
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
        res.status(500).json({ error: err.message }); // Handle errors and send an error response
    })
})

app.post('/getHabits', (req, res) => {
    const habitData = req.body
    // you combine habitData with name
    habitData['user'] = name;
    HabitModel.find(habitData).then(habits => {
        res.json(habits); // Send the found users as a JSON response
      })
      .catch(err => {
        res.status(500).json({ error: err.message }); // Handle errors and send an error response
      });
});

// app.post()


app.listen(3000, () => {
    console.log(`SERVER RUNNING!`);
});

module.exports = app;



// mongo : brandondo, passs q29o00G4he70xi48