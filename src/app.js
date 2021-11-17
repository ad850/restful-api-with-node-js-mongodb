const express = require("express");

//express.json() to recognize json object middleware
require("./db/conn")

const PatientRouter =  require("./routers/patients")



const app = express();
const port = process.env.PORT || 8000;

app.use(express.json())

app.use(PatientRouter)

app.listen(port, () => {

    console.log(`working on ${port}`);

})






















