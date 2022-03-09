const express = require('express');
const ProductService = require('../services/productService');
const {idValidation} = require('../middleware/productValidation');

const router = express.Router();
const productService = new ProductService();

router.get('/', (request, response) => {
    response.json(productService.products);
});

// Thit route is designed to fail
// To avoid the server to crash and stop working
// we should catch the error and manage the error
// By using middlewares 
router.get('/error', (request, response, next) => {
    try {
        const z = x + 1;
    } catch(error) {
        next(error);
    }
});


router.get('/:productId',
// The middleware validations always goes before 
// the route to call the services 
idValidation,
(request, response) => {
    // Controllers don't have any project logic
    // They call the services which contain it instead
    const product = productService.getProduct(request.params.productId);
    if (product)
        response.json(product);
    else
        response.json({message: 'Product was not found'});
});


module.exports = router;