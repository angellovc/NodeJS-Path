

/*
    Middleware implementation to assess the roles
    the roles are passed to it as arguments. It
    returns a middleware that evaluete if the
    user belongs to the allowed role
*/
const roleMiddleware = (...roles) => {
    return (request, response, next) => {
        const {user} = request;
        if (roles.includes(user.role)) {
            next();
        } else {
            next('User role is not allowed to do this operation');
        }
    }
}