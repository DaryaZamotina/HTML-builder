const readdir = require('fs');
const fs = require('fs');
const path = require('node:path'); 

const pathToOurFolder = "./03-files-in-folder/secret-folder";

fs.readdir(pathToOurFolder, {withFileTypes: true}, (error, files) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log("Here is the contect of secret-folder:");

  files.forEach(function(file) {
    const pathToEachFile = path.join(pathToOurFolder, `${file.name}`);

    fs.stat(pathToEachFile, (error, stats) => {
        if (error) {
            console.log(error);
            return;
        }
        console.log(path.basename(file.name, path.extname(file.name)) + " -- " + path.extname(file.name) + " -- " + stats.size);
    }); 
  });
})