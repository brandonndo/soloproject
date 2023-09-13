const mongoose = require('mongoose');

const HabitsSchema = new mongoose.Schema({
    habit: {
        type: String
    },
    user: {
        type: String,
        required: true
    },

});

const HabitModel = mongoose.model("habits", HabitsSchema);
module.exports = HabitModel