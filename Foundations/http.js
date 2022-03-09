/*
    HTTP

    This is used to create http servers
    The example below shows a very simple implementation
    of a server which has a router 
*/

const http = require('http');

const router = (request, response) => {
    switch (request.url.toLowerCase()) {
        case '/hello':
            response.write('Hello, welcome to the page');
            break;
    
        default:
            response.write('Cannot understand the request');
            break;
    }
    response.end();
}

http.createServer(router).listen(3000);

