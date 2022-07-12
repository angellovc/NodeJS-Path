/*
    Singleton Pattern

    This pattern is used when you want to have only one
    instance of the class instead of getting a lot of them.

    Use cases:
        It is useful for example for Databases instaaces, where 
        we want to configure one time the connection and used that
        connection acrosss al the System without having to 
        configure it again.

    Why it works:
        Every time a module is imported, the nodejs engine
        cache it and re-use the same class reference every
        time the class is called; then, the instance of the
        class will be preserved in the cache where the module
        was stored
*/
class dbConnection {

    instance;

    constructor() {
        throw new Error(
            "Constructor is not available for Singleton Classes. Use the getInstance() method to get the Database instance"
        );
    }

    getInstance() {
        if (this.instance = undefined) {
            this.instance = new dbConnection();
            return this.instance
        } else {
            return this.instance;
        }
    }

}