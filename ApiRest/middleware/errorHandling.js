/*
    Middlewares

    Middlewares are functions located in between the request
    and the response from a service. They can perform validations
    they can validade possible errors in the way the info is formatted
    and also they can operate some transformations over the transfered
    information.
*/

// There are two types of middlewares in express
// Error middlewares and the current ones. The
// error middlewares are functions with 4 parameters
// as is shown in the function below
// The current middlewares goes with just three
// the request, response and next
const logErrors = (error, request, response, next) => {
    console.log(error);
    next(error);
}

// The four parameters is a must in order to express recognize
// them as error middlewares
const errorHandler = (error, request, response, next) => {
    response.status(500).json({
        message: error.message,
        stack: error.stack
    })
}
// The middlewares should be exported and must be added
// to the backend app always after the routes had been
// attached into it
module.exports = {
    logErrors,
    errorHandler
}