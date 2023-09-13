// const path = require('path');
const express = require('express');
const app = express()
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://brandondo:q29o00G4he70xi48@cluster0.arxquxp.mongodb.net/bdoSoloProject?retryWrites=true&w=majority")

// const PORT = 3000;

app.listen(3000, () => {
    console.log(`SERVER RUNNING!`);
});

module.exports = app;



// mongo : brandondo, passs q29o00G4he70xi48