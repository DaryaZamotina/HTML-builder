const fs = require('fs');
const path = require('path');
const copyFile = require('fs');

fs.mkdir(path.join(__dirname, 'project-dist'), {recursive: true}, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("New directory project-dist has been created!")
});

/*
fs.readdir('./06-build-page/assets', {withFileTypes: true}, (error, files) => {
    if (error) {
      console.log(error);
      return;
    }
    console.log(files);

    files.forEach(function(file) {
    if (file.isDirectory()) {
      fs.readdir('./06-build-page/assets', {withFileTypes: true}, (error, filesInside) => {
        if (error) {
          console.log(error);
          return;
        }
      
        filesInside.forEach(function(fileInside) {
          const newPathToEachFile = path.join('./06-build-page/project-dist/assets', `${file.name}`, `${fileInside.name}`);
          const oldPathToEachFile = path.join('./06-build-page/assets', `${file.name}`, `${fileInside.name}`);

          function callback(error) {
            if (error) throw error;
            console.log("successful copying" + " "+ `${fileInside.name}`);
          }

          fs.copyFile(oldPathToEachFile, newPathToEachFile, callback);
        });
      });
    }
    });
})
*/

  