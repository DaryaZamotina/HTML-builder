const fs = require('fs');
const path = require('path');
const copyFile = require('fs');

fs.mkdir(path.join(__dirname, 'files-copy'), {recursive: true}, (error) => {
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
    
      const { COPYFILE_EXCL } = fs.constants;
      const newPathToEachFile = path.join('./04-copy-directory/files-copy', `${file.name}`);
      const oldPathToEachFile = path.join('./04-copy-directory/files', `${file.name}`);

      function callback(error) {
        if (error) throw error;
          console.log("successful copying" + " "+ `${file.name}`);
        }

      fs.copyFile(oldPathToEachFile, newPathToEachFile, callback);
    });
});
  
