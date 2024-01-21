const fs = require('fs');
const path = require('path');
const copyFile = require('fs');

fs.mkdir(path.join(__dirname, 'files-copy'), (error) => {
    if (error) {
        console.log(error);
    }
    console.log("New directory files-copy has been created!")
});

fs.readdir('./04-copy-directory/files', {withFileTypes: true}, (error, files) => {
    if (error) {
      console.log(error);
      return;
    }

    files.forEach(function(file) {
    
      const pathToEachFile = path.join('./04-copy-directory/files-copy', `${file.name}`);

      function callback(error) {
        if (error) throw error;
          console.log("successful copying");
        }
      copyFile(`${file.name}`, pathToEachFile, callback);
    });

});
  
