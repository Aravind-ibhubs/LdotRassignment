var express = require("express");
var cor = require("cors");
var mongoose = require('mongoose');
require("dotenv").config();
const routes = require('./routes/routes');
const posts = require('./routes/posts');

const port = 9000;

const mongodbString = process.env.DATABASE_URL;
mongoose.connect(mongodbString);
const connectingDB = mongoose.connection;

connectingDB.on('error' ,(error) => {
    console.log(error);
})

connectingDB.once('connected', () => {
    console.log("Data base is connected");
})

const app = express();

app.use(cor());
app.use(express.json());
app.use("/users", routes);
app.use("/posts", posts);


app.listen(port, () => {
    console.log(`Port is connected at ${port}`);
})
