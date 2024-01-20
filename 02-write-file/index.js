const fs = require('fs');
const Stream = require('stream')
const readline = require('readline');

fs.open('02-write-file/text.txt', 'w', (error) => {
    if(error) throw error
});
let path = "02-write-file/text.txt";

  const ourWritStream = fs.createWriteStream(path);
  ourWritStream.on('error', (error) => {
    console.log("Sorry, error!")
  });

  const readLine = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "Please enter your full name, address, bank card, password.... Joke! :) Only your name, please: "
  });

  readLine.prompt();

  readLine.on('line', (line) => {
    switch (line.trim()) {
        case 'exit':
            readLine.close();
            break;
        default:
            sentence = line + '\n'
            ourWritStream.write(sentence);
            readLine.prompt();
            break;
    }
    }).on('close', () => {
        ourWritStream.end();
  });