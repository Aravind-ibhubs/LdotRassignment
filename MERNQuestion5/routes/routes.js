var express = require("express");
var dataScheme = require("../model/model");

const router = express.Router();

router.get("/getByEmail", async(req,res) => {
    try {
        const email = req.query.email;
        const data =await dataScheme.find();
        const personData = data.filter((eachUser) => {
            if (eachUser.email == email) {
                return eachUser;
            }
        })
        res.json(personData);
    } catch(err) {
        res.status(400);
        res.json({"message" : "Please try after some time"});
    }
})

router.post("/newUser", async(req, res) => {
    const newData = new dataScheme({
        "name" : req.body.name,
        "email": req.body.email,
        "age": req.body.age
    });
    try{
        const newDataSaved = await newData.save();
        res.status(200).json(newDataSaved);
    } catch(err) {
        res.status(400).json({"message" : "Please try after some time"});
    }
})

router.get("/getAll", async(req, res) => {
    try {
        const data = await dataScheme.find();
        res.status(200).json(data);
    } catch(err) {
        res.status(400).json({"message" :"Please try after some time"});
    }
})

module.exports = router;
