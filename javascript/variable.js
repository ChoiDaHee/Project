
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
