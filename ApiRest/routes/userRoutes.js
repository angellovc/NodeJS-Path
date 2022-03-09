const express = require('express');
// Router is in charge of creating the routes that later
// will be attached to the back end app
// here in this routes is where the backend logic resides
const router = express.Router();

/*
    Route/Path

    Before in the past, the server used to serve static files
    so the route specified after the TDL (top level domain)
    was suppossed to be the route in which the static file
    would be located. Now, The major par of the servers don't 
    use statics files, but the concept of route or path has not
    change. The route is used to specify what we want to get from it
 */

// Static routes goes first
router.get('/', (request, response) => {
    // It's also possible to manage dinamically the response status code 
    response.status(400).send('This is the user Route');
});

// Dinamyc routes or route parameters
// Routes are able to works dinamically
router.get('/:userId/product/:productId', (request, response) => {
    const {userId, productId} = request.params;
    response.send({userId, productId});
});

// Query params are different from route params 
// while route params indicate what kind of information
// it's expected to get, the query params indicates
// how that information must be filtered or transformed
// I.E: localhost:3000/123/courses?name=courseName&duration=123
router.get('/:userId/courses', (request, response) => {
    const {name, duration} = request.query;
    const {userId} = request.params;
    response.send({userId, name, duration});
});

/*
    POST

    This is used to create new information
    it receives the information of the new user
    in the body part of the html
*/
router.post('/', (request, response) => {
    const body = request.body;
    response.send({message: 'User was succesfully created', data: body});
});

module.exports = router;

/*
    DELETE

    It only receives one parameter:
    the id of the element to be removed
*/
router.delete('/:userId', (request, response) => {
    const {userId} = request.params;
    response.send({message: 'The user was successfully removed', userId});
});

/*
    PUT

    It receives the id of the to be updated element
    along with its JSON representation. The JSON of
    the element must contain all the fields of the
    elements, even those that won't be updated, if
    some of them are absent, it means that their
    values must be deleted from the DB
*/
router.put('/:userId', (request, response) => {
    const body = request.body;
    const {userId} = request.params;
    response.send({message: 'user was succesfully updated', data: {...body, userId}});
});


/*
    PATCH

    This request is used to updated an element, receives
    the element id and just the field that will be changed
*/
router.patch('/:userId', (request, response) => {
    const body = request.body;
    const {userId} = request.params
    response.send({message: 'The fields where updated for user '+userId, updatedFields: body})
}); 

