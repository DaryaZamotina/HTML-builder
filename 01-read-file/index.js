//const fs = require('fs').promises; 

const fs = require('fs');

async function logChunks(reader) {
    for await (const chunk of reader) {
        console.log(chunk);
    }
}

const reader = fs.createReadStream('./01-read-file/text.txt', {encoding: "utf8"});
logChunks(reader);


/*
const fs = require('fs');
fs.promises.readFile('text.txt', 'utf8').then(data => {
    console.log(data);
});

/*
async function readFile(filePath) { 
  try { 
    const data = await fs.readFile(filePath); 
    console.log(data.toString()); 
  } catch (error) { 
      console.error(`ERROR!: ${error.message}`);
    } 
} 
readFile('text.txt'); */