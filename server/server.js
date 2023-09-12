// const path = require('path');
const express = require('express');
const app = express()
const mongoose = require('mongoose');


const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}!`)
});

module.exports = app;