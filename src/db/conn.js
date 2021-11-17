const mongoose = require("mongoose");


mongoose.connect("mongodb://localhost:27017/hospital")
    .then(() => console.log("successfull..."))
    .catch((err) => console.log(err))