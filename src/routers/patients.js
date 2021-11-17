const express = require("express");
const router = new express.Router();

const Patient = require("../models/patients")

router.post("/patients", async (req, res) => {

    try {

        const one = new Patient(req.body)

        const result = await one.save()

        res.send(result)


    } catch (error) {

        res.send(error)

    }
})

router.get("/patients", async (req, resp) => {


    try {
        // const _id = req.params.id;
        // const result = await Patient.findById(_id)
        // resp.send(result)

        const result = await Patient.find()
        resp.send(result)

    } catch (error) {

        resp.status(404).send(error)

    }

})


module.exports = router;
