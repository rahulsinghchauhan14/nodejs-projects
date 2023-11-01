// output using cli

const x = 1;
const y = 2;

console.log(x, y);

/**
    %s format variable to string
    %d for number
    %i for integer
    %o for object 
 */

    console.log("I am %s and my age is %d", "Rahul", 28);

    console.clear();

    console.count("Hi");
    console.count("Hi");
    console.count("Hiiii");
    console.countReset("Hi");
    console.count("Hi");

    const function1 = () => console.trace();
    const function2 = () => function1();

    function2();


    // calculate time
    const sum = () => console.log(2+3);
    const mul = () => console.log(2*3);

    const measureTime = () => {
        console.time("sum()");
        sum();
        console.timeEnd("sum()");

        console.time("mul()");
        mul();
        console.timeEnd("mul()");
    }

    measureTime();


    // create progressbar [npm i progress]
    // use chalk package for colors npm i chalk@4
    const ProgressBar = require("progress");
    const bar = new ProgressBar("downloading [:bar] :rate/bps :percent :etas",{
        total: 20,
    })

    const timer = setInterval(()=>{
        bar.tick();
        if(bar.complete){
            clearInterval(timer);
        }
    },100)

    const chalk = require("chalk");
    console.log(chalk.green("Rahul green color"));