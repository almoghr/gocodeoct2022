// // Promise
// let isMomHappy = true;

// const willIGetNewPhone = new Promise(function (resolve, reject) {
//   if (isMomHappy) {
//     const phone = {
//       brand: "Samsung",
//       color: "black",
//     };
//     resolve(phone);
//   } else {
//     const reason = new Error("mom is not happy");
//     reject(reason);
//   }
// });

// function showOff(phone) {
//   return new Promise(function (resolve, reject) {
//     let message =
//       "Hey friend, I have a new " + phone.color + " " + phone.brand + " phone";
//     console.log(message);
//     let loveMom = "i love you mama";
//     resolve({ loveMessage: loveMom, phone: phone, message: message });
//   });
// }

// function cryToFriends(reason) {
//   console.log("oh, what a shame " + reason.message);
//   console.log(reason);
// }

// function hugMom(obj) {
//   return new Promise(function (resolve, reject) {
//     resolve(obj);
//   });
// }

// async function askMom2() {
//   try {
//     console.log(1);

//     const phone = await willIGetNewPhone;

//     const obj = await showOff(phone);

//     console.log(2)
//     console.log(obj);
//   } catch (error) {
//     console.log(error);
//   }
//   console.log(3)
// }

// (async () => {
//     await askMom2();
//   })();

// console.log('hi')

// const askMom = function () {
//   console.log(1);
//   willIGetNewPhone
//     .then(showOff)
//     .then(hugMom)
//     .then(function (a) {
//       console.log(a.loveMessage);
//       console.log(a.message);
//       console.log(a.phone);
//     })
//     .catch(cryToFriends);
//   console.log(3);
// };

// // askMom();

// fetch("https://fakestoreapi.com/products/17")
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (answer) {
//     console.log(answer);
//   })
//   .catch((error) => console.log(error));


// const getProducts = async function () {
//   try {
//     const response = await fetch("https://fakestoreapi.com/products");
//     const answer = await response.json();

//     console.log(answer);
//   } catch (error) {
//     console.log(error);
//   }
// };

// getProducts();

fetch("http://127.0.0.1:8000/calculator")
  .then(function (response) {
    return response.text();
  })
  .then(function (answer) {
    console.log(answer);
  })
  .catch((error) => console.log(error));

