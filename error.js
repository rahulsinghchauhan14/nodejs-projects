// Error Object
const error = new Error("Something went wrong");
console.log(error.stack);
console.log(error.message);

//throw new Error("I am error object")


const { CustomError } = require("./CustomError");

//throw new CustomError("This is my custom error");

// handle the exception using try and catch 

// try{
//      doSome();
// }catch(e){
//     console.log("Error Occured")
//     console.log(e);
// }

function doSome() {
    const data = fetch("localhost:300");
}

// uncaught exception
// process.on("uncaughtException",(err) => {
//     console.log("There was an uncaught exception",err)
//     process.exit(1);
// })

//doSome();

// handle exception with promises

// const promises = new Promise((resolve, reject) => {
//     if (false) {
//         resolve(doSome());
//     }
//     reject(doSome());
// })

// promises.then((val) => {
//     console.log(val)
// })
//     .catch((err) => {
//         console.log("Error Occured")
//         console.log(err)
//     })




// Exception using Asyn/Await
function hexcep(){
    console.log("Handle Exception")
    return "Handle Exception";
}

const handleEx = async () => {
    try {
        await hexcep();
    }
    catch(err) {
        console.error(err.message)
    }
}

handleEx();