// const path = require('path');
const express = require('express');
const app = express()
const mongoose = require('mongoose');


// const PORT = 3000;

app.listen(3000, () => {
    console.log(`Server listening!`);
});

module.exports = app;