/*
    Null objects are useful when we want to avoid
    filling the code with a lot of if else to deal
    with nullable values or undefined in case its
    not possible to return the object.

    Instead of returning Null values, we return
    a dummy object so that we can keep the rest
    of the code intact.

*/

// Every null object starts with the word Null
class NullUser {
    id:string
    name:string;
    role:string;
    constructor() {
        this.name = 'Guest'
        this.id = Math.random().toString();
        this.role = 'Guest';
    }
}
/*
    Example

    In this example, instead of returning a null or undefined
    when the user is not logged into the platform and deal with
    the Null, the program returns a NullUser and deal with it
    as it were a User, but is a generic one. So instead of checking

    if (user !== null && user.role !== 'Guest')...

    We just have to add the conditional for the NullUser role 
*/
const login = (name, asGuest = false) => {
    if (asGuest == true)
        return new NullUser();
}

const user = login(undefined, true);

if (user.role !== 'Guest') {
    console.log("You've got a private content");
} else {
    console.log("You're not allowed to access the content");
}

