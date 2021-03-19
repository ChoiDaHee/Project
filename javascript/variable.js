
'use strict';

//2. variable
//let (added in ES6)
{
    let name = 'dahee';
    console.log(name);
    name = 'hello';
    console.log(name);
}


//var 
//var hoisting
//var 는 {} 무시하고 출력됨
age = 4;
var age;




// 3. constants (한번 할당하면 값이 젇대 바뀌지않음)
// -security 보안상의 문제
// -thread safety 
// -reduce human mistakes 

const daysInWeek = 7;
const maxNumber = 5;

//4. Variable types

const count = 17; //integer
const size = 17.1; // decimal number

console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);


//number
const infinity = 1/0;
const negativeInfinity = -1/0;
const nAn = 'not a number'/2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

//string
const char ='c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; 
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

//boolean
//false: 0, null, underfined, NaN, ''
//true: any other value
const canRead = true;
const test = 3 < 1; //false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

//null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

//undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

//symbol
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
const gsymbol1 = Symbol.for('id');
const gsymbol2 = Symbol.for('id');
console.log(gsymbol1 === gsymbol2); //true
console.log(`value: ${symbol1.description}, type: ${typeof Symbol1}`);

//object
// const dahee = { name: 'dahee', age = 20 };
// dahee.age = 21;

//5.Dynamic typing
let text = 'hello';
console.log(text.charAt(0)); //h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
console.log(text.charAt(0));



