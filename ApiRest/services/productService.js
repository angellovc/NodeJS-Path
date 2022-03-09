/*
    Services (Service Layer)

    Services refer to classes that encapsulates
    all the bussiness logic. This services
    will be invoke by the controllers in order to
    retrieve the information requested by the user 
*/

class ProductService {
    constructor() {
        this._products = [
            {
                id: 1,
                name: 'Test1',
                price: 1
            },
            {
                id: 2,
                name: 'Test2',
                price: 1
            },
            {
                id: 3,
                name: 'Test3',
                price: 1
            },
        ]
    }

    get products() {
        return this._products;
    }

    set products(newProducts) {
        this._products = newProducts;
    }

    getProduct(productId) {
        return this._products.filter(product => product.id == productId)[0];
    }
}

module.exports = ProductService;