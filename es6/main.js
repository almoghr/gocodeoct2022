// // console.log(hello)

// // var hello = 'hello there i am almog'

// function hello(){
//     return 'hello world'
// }
// const hello4 = () => 'hello world'

// const obj = {first:'almog', last:'ram'}
// const obj2 = {first:'almog', last:'ram'}
// const obj3 = obj
// const hello2 = 'hello there i am almog'

// let hello3 = 'hello there i am almog'

// console.log(hello + ' ' + hello2 + ' ' + hello3 + ' ' + 'i want to write something else')
// console.log(`${hello} ${hello2} ${hello3} i want to write something else and also ${obj.first + ' ' + obj.last} ${obj.last}`)

// console.log(`this is my message for you "${hello()}"`)

// const numArr = [5,45,78,54,1,4,8,68,9,4,178,17,810,9,48,94,1,9841,5]

// const onlyBiggerThan50 = () => numArr.filter((number) => number > 50);

// console.log(onlyBiggerThan50())

// function onlyBiggerThan50NumberTwo(){
//     return numArr.filter(function(number){
//         return number > 50
//     })
// }

// console.log(hello4())

// console.log(obj === obj2)

// console.log(obj3 === obj)

// obj.first = 'israel'

// console.log(obj, obj3)

// const obj4 = {...obj}

// console.log(obj4)
// obj4.last = 'damri'

// console.log(obj, obj3, obj4)

// const numArr2 = [...numArr]

// numArr2.pop()

// console.log(numArr, numArr2)

// const object1 = {
//     a: 'somestring',
//     b: 42,
//     c: false,
//     d:21,
//     e:{one:1,two:2,three:3},
//     f:54378,
//     g:true,
//     myNickName: 'boss'
//   };

//   const someFunc = ({f,e,a, myNickName,  ...rest}) => {
//     const {one,two,three} = e
//     console.log(rest)
//     console.log(a,e,f)
//     console.log(one,two,three, myNickName)
//     //logic

//     return true
//   }

//   someFunc(object1)
// const p = document.createElement('p')
// p.innerHTML = new Date().toLocaleTimeString()
// document.body.append(p)

// setTimeout(() => console.log("Delayed for 5 second.") , 60000)
// const intervalId = setInterval(()=> p.innerHTML = new Date().toLocaleTimeString(), 1000)

// const finaleDate = new Date("December 20, 2022 00:00:00").getTime();
// let hasTimerDone = false
// const timer = () =>{
//     const now = new Date().getTime();
//     let diff = finaleDate - now;
//     // Showing the alert when the counter time finishes.
//     if(diff < 0){
//         hasTimerDone = true
//     }

//     let seconds = Math.floor(diff % (1000*60) / 1000);
//     seconds <= 9 ? seconds = `0${seconds}` : seconds;
//     document.querySelector('#seconds').textContent = seconds;
// }
// timer();
// // Calling the function every 1000 milliseconds.

// const intId = setInterval(() => {
//     if(!hasTimerDone){
//         timer();
// }},1000);

// const stop = () => {
//     clearInterval(intId)

// }

// const arr = [ 1,2,3,4,5,65,6,7,8,98,90,6,54,43,5423,523,5634,7,334]
// const arr2 = []
// arr.forEach((number) => arr2.push(number**3))

// const newArr = arr.map((number) => number**3)

// const filteredArr = arr.filter((number) => number < 90)

// console.log(newArr, filteredArr, arr2)

// function detectCollision(objects, { x: pointx, y: pointy }) {
//   for (let i = 0; i < objects.length; i++) {
//     const object = objects[i];
//     const { x, y, width, height } = object;
//     if (
//       pointx >= x &&
//       pointx <= x + width &&
//       pointy >= y &&
//       pointy <= y + height
//     ) {
//       return object;
//     }
//   }
// }

// const myObjects = [
//   { x: 10, y: 20, width: 30, height: 30 },
//   { x: -40, y: 20, width: 30, height: 30 },
//   { x: 0, y: 0, width: 10, height: 5 },
// ];

// detectCollision(myObjects, { x: 5, y: 10 });
