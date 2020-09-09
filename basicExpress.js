const express = require("express");
const app = express();
const port = 5000;

app.get('/', function(req, res){
    res.send("Welcome to SAP");
});

app.get('/home', (req, res) => {
    let name = req.query.name
    if(name === undefined)
        name = ''
    res.send("Welcome home " + name);
});

app.get('/family/:id', (req, res) => {
    let id = req.params.id;
    res.send("Hey family " + id);
});

// To view the static contents of ./public directory when /static url is hit
app.use('/static', express.static('public'));

// To test this open command prompt and type "curl -X POST "http://localhost:5000/hello"
app.post('/hello', function(req, res){
    res.send("You just called the post method at '/hello'!\n");
 });

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});