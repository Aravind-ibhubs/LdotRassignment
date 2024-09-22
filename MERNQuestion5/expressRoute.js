var express = require('express');
var cor = require('cors');

const app = express();
app.use(cor());
const port = 2300;

app.get('/user', function(req, res) {
    const param = req.params;
    
});
