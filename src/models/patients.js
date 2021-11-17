
const mongoose = require("mongoose");


const hospitalschema = new mongoose.Schema({

    name: {

        type: String,
        lowercase: true,
        required: true,
        trim: true
    },
    work: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        min: [18, "please enter above 18"],
        max: [60,],
        required: true,
        trim: true
    },
    phone: {
        type: Number,
        minlength: 10,
        required: true,
        trim: true
    },

})

const Patient = new mongoose.model("Patient", hospitalschema)


module.exports = Patient;