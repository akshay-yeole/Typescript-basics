import { Bug } from "./bug.model";

let nameList: any[] = ['abc', 'xyz', 'jkl'];
let namelist2: any[] = ['pqr', 'utv'];
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//concat() : It will require one array which will be concated with existing one.
var concatedArray = nameList.concat(namelist2);
console.log("Example for concate() :: " + concatedArray);

//Filter()
const res = numbers.filter((x) => {
    if (x % 2 == 0)
        return x;
});

console.log(res);

//slice()

//shift()
console.log("\n Numbers[] before shift :: " + numbers);
const res2 = numbers.shift();
console.log("\n Numbers[] after shift() :: " + numbers);

//unshift()
const res3 = numbers.unshift(23);
console.log("\n Numbers[] before unshift() :: " + numbers);
console.log("\n Numbers[] after unshift():: " + numbers);

//every() : If condition satisfy for all elements then it returns true.
//return : True/False
console.log("\n Example for every() :: " + numbers.every(x => x > 0));

//some() : If condition satisfy for any element then it returns true.
//return : True/False
console.log("\n Example for some() :: " + numbers.every(x => x > 0));

//push() : It will add element in the array. Input parameter is required.
numbers.push(15);
console.log("\n Example for push() ::: " + numbers);

//splice() :
console.log("\n Numbers[] before splice() ::" + numbers);
numbers.splice(1, 0, 555);
console.log("\n Numbers[] after splice() ::" + numbers);

//from() : 
const res4 = Array.from(numbers, x => x * x);
console.log("\n Using from() ::: " + res4);

//foreach
numbers.forEach(
    n => {
        console.log("\n Number in numbers[] : " + n);
    });

numbers.map((x) => { console.log("\n Using map Number[x] :" + x) });

const res5 = numbers.map((x) => {
    if (x % 2 == 1) {
        return x;
    }
});

console.log("\nOdd nums :: " + res5);

//slice()
let persons: string[] = ['john', 'spider', 'avengers', 'batman', 'black smasher'];
const res6 = persons.slice(1);
console.log("\n After slice :: " + res6);

//incudes()
const res7 = persons.includes('spider');
console.log("includes() ::" + res7);

let bugs: Bug[] = [];

function onClickAdd(name: string) {
    const newBug = {
        Id: bugs.reduce((prev, bug) => prev > bug.Id ? prev : bug.Id, 0) + 1,
        Name: name
    }
    bugs.push(newBug);
}

function onClickRemove(bugToRemove: Bug) {
    bugs = bugs.filter(bug => bug.Id !== bugToRemove.Id);
}

function getBugs() {
    bugs.map((bug) => console.log("\nId : " + bug.Id + " Name : " + bug.Name));
}

onClickAdd('Unit test case is failing');
getBugs();