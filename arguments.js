// use the minimist package we read the argument value which is passing by the command line

const minimist = require("minimist");

console.log(process.argv);

/*
node arguments.js name=argument
*/

process.argv.forEach((val, index) => {
    console.log(`${index}:${val}`);
})

const argNew = minimist(process.argv.slice(2));
console.log(argNew.name);
/*
PS D:\50LPA\nodejs-projects> node .\arguments.js --name=rahul
[
  'C:\\Program Files\\nodejs\\node.exe',
  'D:\\50LPA\\nodejs-projects\\arguments.js',
  '--name=rahul'
]
0:C:\Program Files\nodejs\node.exe
1:D:\50LPA\nodejs-projects\arguments.js
2:--name=rahul
rahul
*/