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


module.exports = router;
