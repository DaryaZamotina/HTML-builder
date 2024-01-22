const readdir = require('fs');
const fs = require('fs');
const path = require('node:path'); 
const writeFile = require('node:fs');

const pathToStylesFolder = "./05-merge-styles/styles";

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

          fs.writeFile('05-merge-styles/project-dist/bundle.css', str, (error) => {
            if (error) throw error;
            console.log(`${file.name}` + " is successfully signed to bundle.css");
          })
        });
      }
    });
});