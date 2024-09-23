var express = require('express');
var cors = require('cors');

var app = express();
app.use(cors())
var port = 2000;

const userLisr = [
    {
        "id" : "ERP123",
        "name" : "Agastya",
        "gender" : "Male",
        "age" : 23
    },
    {
        "id" : "ERP92",
        "name" : "Vedamshi",
        "gender" : "Female",
        "age" : 13
    },
    {
        "id" : "ERP125",
        "name" : "Arya Vardhan",
        "gender" : "Male",
        "age" : 56
    },
    {
        "id" : "ERP321",
        "name" : "Meri James",
        "gender" : "Male",
        "age" : 35
    },
    {
        "id" : "ERP462",
        "name" : "Jointhan",
        "gender" : "Male",
        "age" : 69
    },
    {
        "id" : "ERP912",
        "name" : "Vana mali",
        "gender" : "Male",
        "age" : 57
    },
    {
        "id" : "EPR350",
        "name" : "Chi-shi",
        "gender" : "Female",
        "age" : 64
    },
    {
        "id" : "ERP009",
        "name" : "Satha vahi",
        "gender" : "Female",
        "age" : 46
    },
    {
        "id" : "ERP276",
        "name" : "Sahiti",
        "gender" : "Female",
        "age" : 58
    },
    {
        "id" : "ERP970",
        "name" : "Ashva",
        "gender" : "Male",
        "age" : 203
    },
    {
        "id" : "ERP005",
        "name" : "Mahema",
        "gender" : "Male",
        "age" : 67
    },
    {
        "id" : "ERP100",
        "name" : "Hima",
        "gender" : "Male",
        "age" : 64
    },
    {
        "id" : "ERP650",
        "name" : "Choma",
        "gender" : "Female",
        "age" : 39
    },
    {
        "id" : "ERP701",
        "name" : "Rama",
        "gender" : "Male",
        "age" : 62
    }
];

app.get("/users", (req, res) => {
    res.json(userLisr);
    res.status(200);
})

app.listen(port, () => {
    console.log(`Server is runing at ${port}`);
})
