const fs = require('fs');

//writing to file
const contentToWrite = "The Node.js file system module allows you to work with the file system on your computer";
fs.writeFile('',contentToWrite,(err)=>{
if (err) {
    console.log(`Error written to file : ${err}`);
} else {
    console.log(`File w01_fsModuleFileritten successfully`);
}
});

// Read to file
fs.readFile('01_fsModuleFile','utf8',(err,data)=>{
    if (err) {
        console.log(`err read on file : ${err}`);
    } else {
        console.log(`Read On file : ${data}`);
    }
});

//File information
fs.stat('01_fsModuleFile',(err,stat)=>{
    if (err) {
        console.log(err);
    } else {
        console.log(`is This File? : ${stat.isFile()}`);
        console.log(`is the directory? : ${stat.isDirectory()}`);
        console.log(`File Size : ${stat.size}`);
    }
});

//Delete The file
fs.unlink('01_fsModuleFile',(err)=>{
if (err) {
    console.log(err);
} else {
    console.log(`File Delete Successfully`);
}
});