/*
    Express

    It is a node framework used to create backend services
*/
// Getting the middlewares 
const {logErrors, errorHandler} = require('./middleware/errorHandling');
// Getting the routes
const router = require('./routes/router');
// Getting express
const express = require('express');
// Creating the backend app
// By using express we create our backend app
const app = new express();
const port = 3000;

// To be able to receive and send JSON's in the body html place
// it's necessary to tell express app to use json
app.use(express.json());

// We pass the app created to the router
// so that the router attaches the routes into it
router(app);

// Middlewares should be added afther the router is added
// Express recognize as a middleware every function with
// three or four parameters: 
//      request, response, next
//      error, request, response, next
app.use(logErrors);
// The order of the middlewares is important
// because they are executed in the same order in which
// they were added to the express app. If logErrors middleware
// Don't use the callback next, the middleware errorHandler won't be executed
// We put at the end the middleware the doesn't use the next callback
app.use(errorHandler);

// listen funcion is the one in charge of keeping the server active
// and ready to use. It's necessary to pass through it the port in
// which the service will be running 
app.listen(port, () => {
    console.log('Running at port: '+ port);
});
