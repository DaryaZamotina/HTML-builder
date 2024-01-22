const fs = require('fs');
const path = require('path');
const copyFile = require('fs');
const readdir = require('fs');
const writeFile = require('node:fs');

fs.mkdir(path.join(__dirname, 'project-dist'), {recursive: true}, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("New directory project-dist has been created!")
});

const pathToStylesFolder = "./06-build-page/styles";

fs.readdir(pathToStylesFolder, {withFileTypes: true}, (error, files) => {
  if (error) {
    console.log(error);
    return;
  }

  let arrStyles = [];
  let str;

    files.forEach(function(file) {
      if (path.extname(file.name) == '.css') {
        
        const pathToEachFile = path.join(pathToStylesFolder, `${file.name}`);
        fs.readFile(pathToEachFile, "utf-8", (error, info) => {
          if (error) throw error;
          arrStyles.push(info);
          str = arrStyles.join('\n');

          fs.writeFile('./06-build-page/project-dist/style.css', str, (error) => {
            if (error) throw error;
            console.log(`${file.name}` + " is successfully signed to style.css");
          })
        });
      }
    });
});
/*
fs.readdir('./06-build-page/assets', {withFileTypes: true}, (error, files) => {
    if (error) {
      console.log(error);
      return;
    }
    console.log(files);

    files.forEach(function(file) {
      const filesPath = path.join('./06-build-page/assets', `${file.name}`);

      fs.readdir(filesPath, {withFileTypes: true}, (error, filesInside) => {
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
    });
}) */

  