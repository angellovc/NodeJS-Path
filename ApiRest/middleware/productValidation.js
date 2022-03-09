const idValidation = (request, response, next) => {
    const {productId} = request.params;
    console.log(parseInt(productId));
    if (typeof parseInt(productId) !== 'number') {
        throw next(new Error('The productId should be a number'));
    }
    next();
}

module.exports = {
    idValidation
}