/*
    File System

    Node file system allow us to manipulate
    the files of the system in many different ways
    the most common are used below: read, write and delete
*/

const fs = require('fs');

const readFromFile = (path, callback) => {
    fs.readFile(path, (error, data) => {
        callback(data.toString());
    });
}

const writeIntoFile = (path, content = '', callback) => {
    fs.writeFile(path, content+'\n', (error) => {
        if (error) {
            console.error('Error: It was not possible to write the content into the file');
        } else {
            console.log('Success: It was correctly written');
        }
    });  
}

const deleteFile = (path, callback) => {
    fs.unlink(path, callback);

}

//readFromFile(__dirname+"/newFile.txt", console.log);
// writeIntoFile(__dirname+"/newFile.txt", "odmasodmasopdmasopd");
// readFromFile(__dirname+"/newFile.txt", console.log);
// deleteFile(__dirname+"/newFile.txt", console.log);