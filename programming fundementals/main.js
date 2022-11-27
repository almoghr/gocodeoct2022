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

// let y = 0;

// do{
//     console.log(y)
//     y++
// } while(y > 5)


// function combineStrings(str1, str2){
//     let combined = ''
//     for(let i = 0; i < str1.length; i++){
//         combined += str1[i] + str2[i]
//     }
//     console.log(combined)
// }

// combineStrings('abc', 'def')

// function combineStrings2(str1, str2){
//     let length = str1.length > str2.length ? str1.length : str2.length
//     // let length;
//     // if(str1.length > str2.length){
//     //     length = str1.length
//     // } else{
//     //     length = str2.length
//     // }

//     let combined = ''
//     for(let i = 0; i < length; i++){
//         if(str1[i]){
//             combined += str1[i] 
//         }

//         if(str2[i]){
//             combined += str2[i] 
//         }
//     }
//     console.log(combined)
// }

// combineStrings2('123456789', '1234567321321321231890')

// function unique(string){
//     let newString = ''

//     for(let i = 0; i < string.length; i++){
//         if(newString.indexOf(string[i]) === -1){
//             newString += string[i]
//         }
//     }
//     console.log(newString)
// }

/// function unique2(string){
//     let newString = ''

//     for(let i = 0; i < string.length; i++){
//         if(!(newString.includes(string[i]))){
//             newString += string[i]
//         }
//     }
//     console.log(newString)
// }

// unique2('thequickbrownfoxjumpsoverthelazydog')

// function firstUniqueLetter(str){
//     for(let i = 0; i < str.length; i++){
//         if(str.indexOf(str[i]) === str.lastIndexOf(str[i])){
//             return str[i] 
//         }
//     }
// }

// const uniqueLetter = firstUniqueLetter('abacddbecg')
// console.log(uniqueLetter)


// const doggy = {
//     name:'venus',
//     favoriteFood: {
//         numberOne: 'pizza',
//         numberTwo: 'bone'
//     },
//     type: 'vimerhaner',
//     age: 13,
//     bark: function(){
//         alert('woof woof')
//     },
    
// }

// console.log(doggy)
// console.log(doggy.age)
// doggy['bark']()
// console.log(doggy.type)

// console.log(doggy.favoriteFood)
// console.log(doggy.favoriteFood.numberTwo)
// console.log(doggy['favoriteFood']['numberTwo'])

// doggy.name = 'york';

// console.log(doggy['age'])
// console.log(doggy.age)

// function showDoggyProperty(prop){
//     console.log(doggy[prop])
// }

// showDoggyProperty('type')
// showDoggyProperty('favoriteFood')

// for (const prop in doggy){
//     // console.log(property)
//     console.log(prop + ' ' + doggy[prop])
//     // console.log(doggy.property)
// }

// const arr = ['hello', 'my', 'name', 'is', 'almog']

// console.log(arr[4])
// console.log(arr[arr.length-1])
// console.log(arr[2])

// console.log(arr[2][1])
//     for(let i = 0; i < arr.length; i++){
//         console.log(arr[i])
//     }
// const newObj = {}
// const human = {
//     name: 'almog',
//     age: 31,
//     profession: 'FS TEAM LEADER'
// }

// const myPet = {
//     name2:'venus',
//     age2: 13,
//     race: 'vimerhaner'
// }

// function mixObjectsIntoOne(obj1, obj2){
    
//     for(const prop in obj1){
//         newObj[prop] = obj1[prop]
//     }
//     for(const prop in obj2){
//         newObj[prop] = obj2[prop]
//     }  
//     console.log(newObj)  
// }
// mixObjectsIntoOne(human, myPet)

// const allCats = {}

// for(let i = 1; i < 6; i++){
//     const currentCat = 'cat'+i

//     // allCats[currentCat] = {color: prompt('enter the cats color')}

//     allCats[currentCat] = {}
//     allCats[currentCat].color = prompt('enter the cats color')
// }
// console.log(allCats)

// function unique2(string){
//     let newString = ''

//     for(let i = 0; i < string.length; i++){
//         if(!(newString.includes(string[i]))){
//             newString += string[i]
//         }
//     }
//     console.log(newString)
// }

// unique2('thequickbrownfoxjumpsoverthelazydog')

// function firstUniqueLetter(str){
//     for(let i = 0; i < str.length; i++){
//         if(str.indexOf(str[i]) === str.lastIndexOf(str[i])){
//             return str[i] 
//         }
//     }
// }

// const uniqueLetter = firstUniqueLetter('abacddbecg')
// console.log(uniqueLetter)


// const doggy = {
//     name:'venus',
//     favoriteFood: {
//         numberOne: 'pizza',
//         numberTwo: 'bone'
//     },
//     type: 'vimerhaner',
//     age: 13,
//     bark: function(){
//         alert('woof woof')
//     },
    
// }

// console.log(doggy)
// console.log(doggy.age)
// doggy['bark']()
// console.log(doggy.type)

// console.log(doggy.favoriteFood)
// console.log(doggy.favoriteFood.numberTwo)
// console.log(doggy['favoriteFood']['numberTwo'])

// doggy.name = 'york';

// console.log(doggy['age'])
// console.log(doggy.age)

// function showDoggyProperty(prop){
//     console.log(doggy[prop])
// }

// showDoggyProperty('type')
// showDoggyProperty('favoriteFood')

// for (const prop in doggy){
//     // console.log(property)
//     console.log(prop + ' ' + doggy[prop])
//     // console.log(doggy.property)
// }

// const arr = ['hello', 'my', 'name', 'is', 'almog']

// console.log(arr[4])
// console.log(arr[arr.length-1])
// console.log(arr[2])

// console.log(arr[2][1])
//     for(let i = 0; i < arr.length; i++){
//         console.log(arr[i])
//     }
// const newObj = {}
// const human = {
//     name: 'almog',
//     age: 31,
//     profession: 'FS TEAM LEADER'
// }

// const myPet = {
//     name2:'venus',
//     age2: 13,
//     race: 'vimerhaner'
// }

// function mixObjectsIntoOne(obj1, obj2){
    
//     for(const prop in obj1){
//         newObj[prop] = obj1[prop]
//     }
//     for(const prop in obj2){
//         newObj[prop] = obj2[prop]
//     }  
//     console.log(newObj)  
// }
// mixObjectsIntoOne(human, myPet)

// const allCats = {}

// for(let i = 1; i < 4; i++){
//     const currentCat = 'cat'+i

//     // allCats[currentCat] = {color: prompt('enter the cats color')}

//     allCats[currentCat] = {}
//     allCats[currentCat].name = prompt('enter the cats name')
// }

// const guessedName = prompt('guess one of my cat\'s name')

// function guessMyCatName(objects, name){
//     for (const key in objects){
//         if(objects[key]['name'] === name){
//             console.log('you guessed right my cat\'s name is ' + name)
//         } 
//     }
// }

// guessMyCatName(allCats, guessedName)
// console.log(allCats)

// const arr = [1,2,3,4,5,6,7,8,9,10]
// const arr2 = ['dog','cat', 'false', 'true']

// arr.forEach(function(item, index){
//     console.log(item*item+item)    
// })

// const newArr = arr2.map(function(item, index){
//     return Date.now() + item
// })
// const newArr321321 = arr.map(function(item, index){
//     return item**6
// })

// console.log(newArr321321)

// // console.log(newArr)

// const length = arr.push(11,12,13,2015185408)
// // push adds an item to the end of the array and return the new length
// console.log(length)
// const lastEl = arr.pop()
// // pop deletes the last element of the array and returns it
// console.log(lastEl)
// const length2 = arr.unshift(0)
// // unshift adds an item to the start of the array and return the new length
// console.log(arr)
// console.log(length2)

// console.log(arr2.indexOf('false'))
// // like strings, gives the index of a certain item in the array, 
// //if theres more than 1 it will stop in the first and wont show you the next 
// //if not exist return -1 

// const deletedElements =  arr.splice(5, 3)

// //deletes from a position requested in the array, and amount of deleting count,
// //returns the items deleted inside a new array

// console.log(arr)
// console.log(deletedElements)

// console.log(arr2.includes('cat'))
// // like strings, gives a boolean of a certain item in the array, if exists true else false
// //if theres more than 1 it will stop in the first and wont show you the next 

// const arr3 = ['hi', 'bye', 'guy']

// const newArr3 = arr3.slice(0,1)
// // copies from a position requested in the array, and amount of copy count not including the end,
// //returns the items copied inside a new array

// console.log(arr3)
// console.log(newArr3)


// const arr4 = arr2.concat(arr3, arr ,['shimi' , 'dimi'])
// // combines two or more arrays together,
// //must put a new constant for getting the answer 
// //no mutation on the array that being concatanated
// console.log(arr2)
// console.log(arr4)


// const filteredArr = arr4.filter(function(item, index){
//     return item.toString().includes('i') || item.toString().includes('e')
// })
// //loops over an array and brings back to a new variable
// //all of the elements that are true for a certain condition

// console.log(filteredArr)

// const numbersMixedArr = [1,56,87,48,35,61,84,97,85,112,5474];

// const itemBiggerThan100 = numbersMixedArr.find(function(item,index){
//     return item < 50 && item > 1
// })
// const itemBiggerThan100Index = numbersMixedArr.findIndex(function(item,index){
//     return item < 50 && item > 1
// })

// console.log(itemBiggerThan100, itemBiggerThan100Index)

// const arrToReverse = [1,2,3]
// arrToReverse.reverse().map(function(item,index){
//     console.log(item)
// })
// console.log(arrToReverse)

// const delShiftedItem = arrToReverse.shift()
// console.log(arrToReverse, delShiftedItem)







// question number 3

// 3. כתבו פונקציה last המקבלת מערך arr ומספר כלשהו חיובי X
// ומחזירה מערך חלקי עם X איברים מסוף המערך המקורי.
// כאשר לא מועבר X - הפונקציה תחזיר את האיבר האחרון בלבד.

// function last(arr, x){
//     if(!x){
//         return arr[arr.length-1]
//     }
//     const newArr = arr.slice(-x)
//     return newArr
// }

// // לדוגמא, עבור:
// console.log(last([7, 9, 0, -2]));
// console.log(last([7, 9, 0, -2],3));
// console.log(last([7, 9, 0, -2],6));

// יוצג הפלט:
// -2
// [9, 0, -2]
// [7, 9, 0, -2]

// כתבו את הפונקציה פעם אחת בעזרת לולאה ופעם שנייה בעזרת slice.
// השתמשו בתוכנית בפונקציות אלו.


//question number 4

// 4. כתבו פונקציה noCapital שתקבל מערך של מחרוזות ותחזיר מערך חדש עם המחרוזות שלא מופיעה בהן אות גדולה. היעזרו באחת מתוך ה array methods.
// לדוגמא:
// noCapital(["Avi", "Dani", "shuki", "mOshe", "arik"]);
// יוחזר המערך:
// ["shuki", "arik"]
// השתמשו בתוכנית בפונקציה זו.


function noCapital(arr){
    const newArr = arr.filter(function(item){
        return item.toLowerCase() === item
    })
    return newArr
}

console.log(noCapital(["Avi", "Dani", "shuki", "mOshe", "arik"]))

//question number 6
// 6. מילה שהיא פָּלִינְדְרוֹם הינה מילה שקריאתה מימין לשמאל ומשמאל לימין היא זהה. לדוגמא: aba.
// כתבו פונקציה שתקבל מערך של מחרוזות ותחזיר מערך חדש עם מחרוזות הפלינדרום בלבד. היעזרו באחת מתוך ה array methods ובפונקציה שכתבתם בתשובה הקודמת.
// השתמשו בתוכנית בפונקציה זו.

// function palindrom(arr){
//     //option1
//     const newArr = arr.filter(function(item){
//         return item.split('').reverse().join('') === item
//     })
//     return newArr
// }

// console.log(palindrom(['12345654321', 'sbaybadysaibn', 'li il']))
//question number 7

// 7. כתבו פונקציה delAnimals המקבלת מערך של חיות ומערך נוסף של חיות למחיקה ומחזירה מערך חדש שמכיל את החיות שנשארו.
// לדוגמא:
// delAnimals(["Horse", "Cow", "Sheep", "Donkey"], ["Cow", "Sheep"]);
// יוחזר המערך:
// ["Horse", "Donkey"]
// השתמשו בתוכנית בפונקציה זו.

// function delAnimals(animalsArr, animalsToDeleteArr){
//     const newAnimalsArr = animalsArr.filter(function(animal){
//         return !(animalsToDeleteArr.includes(animal))
//     })
//     return newAnimalsArr
// }

// console.log(delAnimals(["Horse", "Cow", "Sheep", "Donkey"], ["Cow", "Sheep"]));
