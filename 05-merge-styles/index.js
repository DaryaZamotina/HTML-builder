const readdir = require('fs');
const fs = require('fs');
const path = require('node:path'); 

const pathToStylesFolder = "./05-merge-styles/styles";

fs.open('05-merge-styles/project-dist/bundle.css', 'w', (error) => {
  if(error) throw error;
  console.log('bundle.css is created!');
});

fs.readdir(pathToStylesFolder, {withFileTypes: true}, (error, files) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log("Styles files are as follows:");
 
  let arrStyles = [];

  files.forEach(function(file) {
    if (path.extname(file.name) == '.css') {
        console.log(file.name);
        
        const pathToEachFile = path.join(pathToStylesFolder, `${file.name}`);
        
        for (const arrStyle of arrStyles) {
          fs.readFile(pathToEachFile, "utf-8", (error, info) => {
            if (error) throw error;
            arrStyle = info;
          });
        }
    }
  });

  fs.writeFile('05-merge-styles/project-dist/bundle.css', arrStyles, (error) => {
    if (error) throw error;
    console.log("Everything is successfully signed to bundle.css");
  })

});
