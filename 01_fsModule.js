const fs = require('fs');

//writing to file
// const contentToWrite = "Hii This is Dada Bhoge";
// fs.writeFile('01_fsModuleFile.txt',contentToWrite,(err)=>{
// if (err) {
//     console.log(`Error written to file : ${err}`);
// } else {
//     console.log(`File written successfully`);
// }
// });

// // Read to file
// fs.readFile('01_fsModuleFile.txt','utf8',(err,data)=>{
//     if (err) {
//         console.log(`err read on file : ${err}`);
//     } else {
//         console.log(`Read On file : ${data}`);
//     }
// });

// //File information
// fs.stat('01_fsModuleFile.txt',(err,stat)=>{
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(`is This File? : ${stat.isFile()}`);
//         console.log(`is the directory? : ${stat.isDirectory()}`);
//         console.log(`File Size : ${stat.size}`);
//     }
// });

// //Delete The file
// fs.unlink('01_fsModuleFile.txt',(err)=>{
// if (err) {
//     console.log(err);
// } else {
//     console.log(`File Delete Successfully`);
// }
// });

// Appending file information
// const contentToAppend = " Welcome to codemind";
// fs.appendFile('01_fsModuleFile.txt',contentToAppend,(err)=>{
// if (err) {
//     console.log(err);
// } else {
//     console.log(`Append Data Successfully`);
// }
// });

// Create Directory

// fs.mkdir('01_newDirectory',(err)=>{
// if (err) {
//     console.log(err);
// } else {
//     console.log(`Create dir successfully `);
// }
// });

// Read Directory
// fs.readdir('.',(err,files)=>{
// if (err) {
//     console.log(err);
// } else {
//     console.log(files);
// }
// });

// Remove Dir
fs.rmdir('01_newDirectory',(err)=>{
    if (err) {
        console.log(err);
    } else {
        console.log(`Delete Dir successfully`);
    }
});