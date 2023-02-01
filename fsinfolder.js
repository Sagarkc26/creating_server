const fs = require("fs");
const path = require("path");

const dirPath = path.join(__dirname, "curd");
const filePath = `${dirPath}/apple.txt`;
// fs.writeFileSync(filePath, "This is a fruit;named Apple");
// fs.readFile(filePath, "utf-8", (err, item) => {
//   console.log(item);
// });
// fs.appendFile(filePath, " It is cultivate in himalayan region", (err) => {
//   if (!err) {
//     console.log("File is updated");
//   }
// });
// fs.rename(filePath, `${dirPath}/fruits.txt`, (err) => {
//   if (!err) {
//     console.log("file is updated!!!");
//   }
// });
fs.unlinkSync(`${dirPath}/fruits.txt`);
