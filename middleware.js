var express = require('express');
var app = express();

app.get('/user/:id', function (req, res, next) {
    // if the user ID is 0, skip to the next route
    if (req.params.id === '0') next('route')
    // otherwise pass the control to the next middleware function in this stack
    else next()
}, function (req, res, next) {
    // send a regular response
    res.send('regular')
})

// handler for the /user/:id path, which sends a special response
app.get('/user/:id', function (req, res, next) {
    res.send('special')
})


// Request -> Multiple_Middleware -> Route -> Multiple_middleware -> Response

//Middleware function to log request protocol
app.use('/things', function (req, res, next) {
    console.log("First middleware " + Date.now());
    next();
});

app.use('/things', function (req, res, next) {
    console.log("Second middleware " + Date.now());
    next();
});

// Route handler that sends the response
app.get('/things', function (req, res, next) {
    res.send('Things ' + Date.now());
    next();
});

app.use('/things', (req, res, next) => {
    console.log("End middleware " + Date.now());
})


app.listen(3000);