const express = require('express');
const path = require('path')
const app = express()
const mongoose = require('mongoose');
const UserModel = require('./models/users')
const HabitModel = require("./models/habits")
const cors = require('cors');

app.use(express.json());
app.use(express.static(path.resolve(__dirname, '../client')));
// Enable CORS for all routes
app.use(cors());


// catch all route to serve index.html for client facing route
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../public', 'index.html'));
});

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

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    UserModel.findOne({ username })
    .then((user) => {
        if (!user || user.password !== password){
            return res.status(401).json({message: 'Login failed! ): '});
        }
        // req.session.user = {
        //     id: user._id,
        //     username: user.username,
        //     name: user.name,
        // };
        return res.status(200).json({message: 'Login successful! (: '})
    })
    .catch((error) => {
        console.error(error);
        return res.status(500).json({error: 'server error, in login'})
    })
})

// app.post('/logout', (req, res) => {
//     // Destroy the user's session
//     req.session.destroy(err => {
//         if (err) {
//             console.error(err);
//             return res.status(500).json({ error: 'Server error' });
//         }
//         res.status(200).json({ message: 'Logout successful' });
//     });
// });

app.post('/getUser', (req, res) => {
    const userData = req.body
    // console.log('users we input:', req.body)
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


// const name = "Brandon Do"
// const habitData = req.body
// you combine habitData with name
// habitData['username'] = username;

app.post('/addHabit', (req, res) => {
    const { username, habit } = req.body
    HabitModel.create({username, habit})
    .then(response => {
        res.json(response);
    })
    .catch(err => {
        res.status(500).json({ error: err.message }); 
    })
})

app.post('/deleteHabit', (req, res) => {
    const { username, habit } = req.body
    HabitModel.deleteOne({username, habit})
    .then(response => {
        res.json(response);
    })
    .catch(err => {
        res.status(500).json({ error: err.message }); 
    })
})

// post req http://localhost:3000/getHabits -> input user -> get all habits
// you combine habitData with username
// habitData['username'] = username;
// habitData['username'] = username;
// const habitData = req.body
app.post('/getHabits', (req, res) => {
    const { username } = req.body;
    HabitModel.find({username}).then(habits => {
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


