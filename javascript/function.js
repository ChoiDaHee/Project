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
}
printAll('dream', 'coding', 'ellie');