var express = require('express');
var app = express();
var port = 2000;

const userLisr = [
    {
        "id" : 1,
        "name" : "Agastya",
        "gender" : "Male",
        "age" : 23
    },
    {
        "id" : 2,
        "name" : "Vedamshi",
        "gender" : "Female",
        "age" : 13
    },
    {
        "id" : 3,
        "name" : "Arya Vardhan",
        "gender" : "Male",
        "age" : 56
    },
    {
        "id" : 4,
        "name" : "Meri James",
        "gender" : "Male",
        "age" : 35
    },
    {
        "id" : 5,
        "name" : "Jointhan",
        "gender" : "Male",
        "age" : 69
    },
    {
        "id" : 6,
        "name" : "Vana mali",
        "gender" : "Male",
        "age" : 57
    },
    {
        "id" : 7,
        "name" : "Chi-shi",
        "gender" : "Female",
        "age" : 64
    },
    {
        "id" : 8,
        "name" : "Satha vahi",
        "gender" : "Female",
        "age" : 46
    },
    {
        "id" : 9,
        "name" : "Sahiti",
        "gender" : "Female",
        "age" : 58
    },
    {
        "id" : 10,
        "name" : "Ashva",
        "gender" : "Male",
        "age" : 203
    },
    {
        "id" : 11,
        "name" : "Mahema",
        "gender" : "Male",
        "age" : 67
    },
    {
        "id" : 12,
        "name" : "Hima",
        "gender" : "Male",
        "age" : 64
    },
    {
        "id" : 13,
        "name" : "Choma",
        "gender" : "Female",
        "age" : 39
    },
    {
        "id" : 17,
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
