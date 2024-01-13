//Functions :
//All function params are mandatory
//A function can have a return type.
//function params can be made as "optional".(default value is undefined)
//function params can have a default value as well. 
//function can take variable numbeer of args(REST params)
//function can have only one REST param

//Type of functions :
//1. Named function
//2. Anonymous function(arrow/lamda function)

//Function parameters :
//optional params
//default params
//REST params(function definition)
//spread syntax (function invocation)

//Examples ::
console.log(`\nUsing basic function`);
function logIn(username: string, password: string): string {
    return `User Name is ${username} And Password is ${password}`;
}
console.log(logIn('Abc', 'ABC'));

//optional parameter
console.log(`\nUsing optional parameter`);
function logIn2(username: string, password?: string): string {
    return `User Name is ${username} And Password is ${password}`;
}
console.log(logIn2('Abc'));

//REST params
console.log(`\nUsing REST params`);
function drawPloygon(...points: number[]): number {
    return points.length;
}
console.log(`Number of Points :: ${drawPloygon(2)}`);
console.log(`Number of Points :: ${drawPloygon(2, 3, 4)}`);

//spread syntax (function invocation)
function sum(x: number, y: number, z: number) {
    return x + y + z;
}
let nums: number[] = [1, 2, 3];
//console.log(sum(...nums));

//anonymous function -> for callback purpose
setTimeout(
    function () {
        console.log(`\anonymous function is working.`);
    }
    , 1000);

//lamda function
setTimeout(
    () => console.log(`\nLamda function is working.`)
    , 2000);

let square = (num: number) => (num * num);
console.log(`\nSQUARE :: ${square(2)}`);