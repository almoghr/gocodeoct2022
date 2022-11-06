// const age = 31;

// console.log('age');

// const name = 'almog';

// let name3 = `shalom`;

// let name2;
// name2 = "dror";


// name3 = 550;

// const num = 50;
// const num2 = num+12;

// console.log(num, num2);

// let isAlmogHappy = true;

// 'dsadas' (string), 30 (number), true\false (boolean), [], {}, function, date,


// let age = 30
// console.log(age)
// age = age + 1 // 31
// console.log(age)
// age = age - 5 // 26
// console.log(age)
// age = age * 2
// console.log(age)
// age = age / 26
// console.log(age)

// age += 5 // מגדיל בכמה שנבקש ממנו
// age++ // תמיד מגדיל ב 1
// age -= 2
// age--

// const something = 5 + 'hello'
// let plus = 1 + '1' // 1+1=2 '1'+'1' = '11'
// // console.log(parseInt(plus))
// plus += 5
// console.log(plus)
// console.log(something)
// const myMoney = 200 + 1500;
// const yerusha = 10000000
// console.log(1700)

// const total = myMoney + (yerusha - yerusha * 0.35)
// console.log(total)

// let x;
// console.log(x)
// console.log(age)

// console.log('i am here!!!!!!!')

// const myFriend = 'EDEN';
// const myFriend2 = 'eden'
// console.log(myFriend === myFriend2)
// const numb = 5
// const numb2 = '5'
// console.log(numb === numb2)
// console.log(numb == numb2) // לא להשתמש בשני שווה אף פעם!!!!!!

//  const myHobby = prompt('הכנס את התחביב האהוב עליך')
// console.log(myHobby)


// const myAge = 36;
// const yourAge = 36;
// const something = 'sdahkjdhgsajkdas'
// if(myAge === true){
//     console.log('????')
// }

// // undefined, null, 0, false ''// falsy values

// let someVarible;

// if(!someVarible){
//     console.log('peulot')
// }


// if(!(myAge === yourAge)){
//     console.log('we are no equal')
// }


// if(myAge > yourAge) {
//     console.log('i am bigger');
// } else if (myAge === yourAge) {
//     console.log('we are the same');
// } else {
//     console.log('i guess i am smaller than you');
// }

// const hourOfDay = 18;

// if(hourOfDay < 6 || (hourOfDay > 18 && hourOfDay < 24) ) {
//     console.log('go to sleep!!!!');
// } else if (hourOfDay > 6 && hourOfDay <= 11) {
//     console.log('good morning');
// } else if (hourOfDay > 11 && hourOfDay <= 18){
//     console.log('good afternoon')
// } else{
//     console.log('good evening')
// }

// let tshuva = 0;

// function plus(numA, numB){
//     tshuva = numA+numB;
//     return tshuva
// }
// function minus(numA, numB){
//     tshuva = numA-numB;
//     return tshuva
// }
// function multi(numA, numB){
//     tshuva = numA*numB;
//     return tshuva
// }
// function division(numA, numB){
//     tshuva = numA/numB;
//     return tshuva
// }


// const result = plus(2321321312,5312455235653)
// console.log(tshuva)
// console.log(result)



// function calculator(num1, num2, mathFunction){
//     return mathFunction(num1, num2)
// }

// const res = calculator(55, 48, multi)
// console.log(res)

// const res2 = calculator(36180, 9, division);
// console.log(res2)

// const res3 = calculator(213246596, 13548647861, plus)
// console.log(res3)

// function myDetails(age, height){
//     console.log('hello, my age is  '+ age + ' i am ' + height + ' cm')
// }

// const myAge = prompt('enter your age');
// const myHeight = prompt('enter your height')

// myDetails(myAge, myHeight)

// להראות לכולם דרך יעילה יותר
// const day = prompt('What is the day today?');
// const hour = prompt('What is the time?');
// if ((day === 'Sunday' || day === 'Monday' || day === 'Tuesday' || day === 'Wednsday' || day === 'Thursday' || day === 'Friday') && hour <= 9) {
//     console.log('Put Carmi in the Kindergarden');
// } else if ((day === 'Sunday' || day === 'Monday' || day === 'Tuesday' || day === 'Wednsday' || day === 'Thursday') && (hour > 9 && hour <= 18)) {
//     console.log('Go to work');
// } else if ((day === 'Sunday' || day === 'Monday' || day === 'Tuesday' || day === 'Wednsday' || day === 'Thursday') && hour > 18) {
//     console.log('Go home to help with Carmi');
// } else if ((day === 'Friday') && hour > 13) {
//     console.log('Go to visit the family');
// } else if (day === 'Saturday') {
//     console.log('Go for a nice trip, or stay at home');
// }

// VARIABLES

// const something = 'string';
// let something2 = 50;
// something2 = 'tusgsk';

// var something3 = 'shalom' // לא משתמשים בו בכלל. תימנעו ותישארו עם השניים שלמעלה.

// CONDITIONALS
// const day = prompt('What is the day today?');
// const hour = parseInt(prompt('What is the time?'));
// // if(day === 'sunday','monday','tuesday','wednesday','thursday','friday')
// if(day === 'Sunday' || day === 'Monday' || day === 'Tuesday' || day === 'Wednsday' || day === 'Thursday'){
//     if(hour <= 9){
//         console.log('Put Carmi in the Kindergarden');
//     } else if (hour > 9 && hour <= 18){
//         console.log('Go to work');
//     } else {
//         console.log('Go home to help with Carmi');
//     }
// } else if(day === 'Friday' && hour > 13) {
//     console.log('Go to visit the family');
// } else {
//     console.log('Go for a nice trip, or stay at home');
// }

// // FUNCTION
// // 22/10/2022 --> 22.10.2022:08:00:00
// const num4 = 50000
// let x = 5;

// function chooseMathOperation(numA, numB, executeFunc){
//     const answer = executeFunc(numA, numB)
//     return answer
// }

// function makeSum(num1, num2){
//     console.log('shalom')
//     const ans = num1+num2
//     x += num1;
//     console.log(ans)
//     return ans
// }
// function makeMinus(num1, num2){
//     console.log('shalom')
//     const ans = num1-num2
//     x -= num1;
//     console.log(ans)
//     return ans
// }

// const ans3 = chooseMathOperation(x, x, makeSum)
// const ans4 = chooseMathOperation(10, 7, makeMinus)

// const ans = makeSum(x,6);
// const ans2 = makeMinus(90, x)


// exam question answering

//question 1

// function printMaxNumber(num1,num2){
//     if(num1 > num2){
//         console.log(num1)
//     } else if (num2 > num1){
//         console.log(num2)
//     } else{
//         console.log('they are equal')
//     }
// }

// printMaxNumber(784, 37)
// printMaxNumber(22, 37)
// printMaxNumber(22, 22)


// //question 2

// function printMaxNumberPrompt(num1,num2){
//     if(num1 > num2){
//         console.log(num1)
//     } else if (num2 > num1){
//         console.log(num2)
//     } else{
//         console.log('they are equal')
//     }
// }

// printMaxNumberPrompt(parseInt(prompt('enter first number')), Number(prompt('enter second number')))


// //question 3

// function calculator(num1, num2, operand){
//     if(operand === "+"){
//         return num1+num2
//     } else if (operand === "-"){
//         return num1-num2
//     }else if (operand === "*"){
//         return num1*num2
//     } else if (operand === "/"){
//         if(num2 === 0){
//             console.log('ב.ח.מ')
//         }else{
//             return num1/num2
//         }
//     } else{
//         console.log('this operand is not legal: ', operand)
//     }
// }
// const answer = calculator(parseInt(prompt('enter first number')), parseInt(prompt('enter second number')), prompt('enter an opperand'))
// console.log(answer)
// //question 4

// function plus(num1, num2){
//     console.log(num1+num2)
// }
// function multi(num1, num2){
//     console.log(num1*num2)
// }

// function calculatorWithFunctions(num1, num2, operand){
//     if(operand === "+"){
//         plus(num1, num2)
//     } else if(operand === "*"){
//         multi(num1, num2)
//     }
// }

// calculatorWithFunctions(parseInt(prompt('enter first number')), parseInt(prompt('enter second number')), prompt('enter an opperand'));



//loops

// for(let i = 0; i < 101; i++){
//     console.log(i)
// }

// for(let i = 1; i <= 10; i++){
//     console.log(i*9)    
// }

// let number = 5
// console.log(number++)

// let number2 = 5
// console.log(++number2)

// for(let i = 0; i <= 90; i+=10){
//     let line = '';

//     for(let j = 1; j <= 10; j++){
//        line += i+j + ' ' +  '\t'
//     }
    
//     console.log(line)
// }

// let x = 0;

// while(x > 0){
//     console.log(x)
//     x--
// }

let y = 0;

do{
    console.log(y)
    y++
} while(y > 5)
