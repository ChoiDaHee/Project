// Function
// - fundamental building block in the program
// - subprogram can be used multiple times (여러번 재사용 가능)
// - performs a task or calculates a value (한가지의 일이나 어떤 값을 계산하기 위해)

// 1. Function declaration
// function name(param1, param2) {body... return;}
// one function === one thing (하나의 함수는 한가지 일만 실행)
// naming: doSomething, command, verb (함수의 이름은 동사 형태로 지정)
// e.g. createCardAndPoint -> createCard, createPoint 
// function is object in JS 
function printHello() {
    console.log('Hello');
}
printHello();

function log(message) {
    console.log(message);
}
log('Hello@');
log(1232);

// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
    obj.name = 'coder';
}
const ellie = { name: 'ellie' };
changeName(ellie);
console.log(ellie);

// 3. Default parameters (added in ES6)
function showMessage(message, from) {
    if(from === undefined) {
        from = 'dahee';
    }
    console.log(`${message} by ${from}`);   
}
showMessage('Hi!');

function showMessage(message, from = 'dahee') {
    console.log(`${message} by ${from}`);   
}
showMessage('Hi!');

// 4. Rest parameters (added in ES6)
function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }

    for (const arg of args) {
        console.log(arg);
    }
    
    args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'ellie');

// 5. Local scope
let globalMessage = 'global' //global variable
function printMessage() {
    let message = 'hello';
    console.log(message); //local variavle
    console.log(globalMessage);
    function printAnother() {
        console.log(message);
        let childMessage = 'hello';
    }
    // console.log(childMessage); //error
    // return undefined; (생략 가능)
}
printMessage();

// 6. Return a value
function sum(a, b) {
    return a+b;
}
const result = sum(1, 2); //3
console.log(`sum: ${sum(1,2)}`);

// 7. Ealry return, early exit
// bad
function upgradeuser(user) {
    if (user.point > 10) {
        // long upgrade logic...
    }
}

// good
function upgaradeUser(user) {
    if (user.point <= 10) {
        return;
    }
    // long upgrade logic...
}

// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be returned by another function

// 1.Function expression
// a function declaration can be called earlier than it is defiend. (hoisted)
// a function expression is created when the execution reaches it.
const print = function () {
    //anonymous function
    console.log('print');
}
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1,3));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    }else{
        printNo();
    }
}
// anonymous function
const printYes = function () {
    console.log('yes!');
};

// named function
// better debugging in debugger's stack traces
// recursions
const printNo = function print() {
    console.log('no!');
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function
// always anonymous
const simplePrint = function () {
    console.log('simplePrint');
};