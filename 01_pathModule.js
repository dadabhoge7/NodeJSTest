// Provides utilites for working with file and directory path
const path = require('path');
//Join th path
const path1 = 'myDir';
const path2 = 'file.txt';

const pathJoin = path.join(__dirname,path1,path2);
console.log(pathJoin);
//Getting file extension
const fileName = 'codeMint.txt';
const fileName1 = 'codeMint.html';
console.log(path.extname(fileName));
console.log(path.extname(fileName1));

//Getting base name of file
const filePath = "D:\Angular\nodeJS\NodeJSTest";
const name = path.basename(filePath);
console.log(name);

