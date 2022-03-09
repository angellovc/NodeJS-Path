/*
    Router (Controller Layer)

    This is the file in charge of gathering all kind of routes
    of the same type under a unique route. I.E: all the user
    routes goes under the path localhost:3000/user while
    product routes goes under localhost:3000/prduct 

    These are the controllers in charge of redirecting the user
    to the content
*/
const userRoutes = require('./userRoutes');
const productRoutes = require('./productRoutes');

// This is simple function that will be executed at the
// main file of the project, where the express server
// is raised. It receives an app created by express 
// and is in charge of attaching into it the routes of the project
const router = (app) => {
    app.use('/users', userRoutes);
    app.use('/products', productRoutes);
}

module.exports = router;