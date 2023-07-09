"use strict";
const fsRead = require('node:fs/promises');
const fsWrite = require('fs');
//var stream = fs.createWriteStream("C:/Users/User/OneDrive/Робочий стіл/my_file.txt");

fsRead.readFile('./test.txt', 'utf-8')
  .then(content => {
    const stream = fsWrite.createWriteStream("myTxt.txt");
    stream.once('open', function (fd) {
      stream.write(content + "\n");
      stream.write("ho-ho-ho!");
      stream.end();
    });
  })
  .catch(error => console.log(error));
