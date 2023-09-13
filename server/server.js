// const path = require('path');
const express = require('express');
const app = express()
const mongoose = require('mongoose');
const UserModel = require('./models/users')

app.use(express.json());

mongoose.connect(
    "mongodb+srv://brandondo:q29o00G4he70xi48@cluster0.arxquxp.mongodb.net/bdoSoloProject?retryWrites=true&w=majority"
    );

app.get('/getUsers', (req, res) => {
    UserModel.find({}, (err, result) => {
        
    })
});

app.post()


app.listen(3000, () => {
    console.log(`SERVER RUNNING!`);
});

module.exports = app;



// mongo : brandondo, passs q29o00G4he70xi48