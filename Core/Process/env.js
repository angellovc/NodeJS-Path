/*
    ENV

    through this object we can access to the node
    runtime environment variables. 
*/

// Accessing the env variables
console.log(process.env);

// Since process.env is an object, we can add new variables to it.
process.env.z = 'This is the Z letter';
console.log(process.env.z);
// And is also possible to deleted them;
delete process.env.z;
console.log(process.env.z);
// !IMPORTANT¡: Although we're able to manipulate the env variables of the
// nodeJS current process it won't take effect outside the context of the
// current nodeJS execution process
// On some operative systems the env variables are case sensitives
process.env.Z = "I'm case sensitive";
console.log(process.env.z);
console.log(process.env.Z);
// NodeJS child process cannot affect the env variables of their parent
