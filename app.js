// let num = 101;
// const p1 = new Promise((resolve, reject) => {
//   if (num % 2 == 0) {
//     resolve("Promise Resolved");
//   } else {
//     reject("Promise Rejected");
//   }
// });
// // How to Resolve Promise?
// p1.then(function (data) {
//   console.log(data);
// }).catch(function (data) {
//   console.log(data);
// });
// const arr = [1, 2, 3];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
// Promises useCases:-
// 1. Api Calling *
// 2. Handling Callback hell problem *
// 3. Handling asynchrnous operations

// Api -> Application Programming Interface (Acts as a middleware between client and server)
// JSON -> Javascript Object Notation

// 'https://dummyjson.com/products'
const products = document.getElementById("products");
const productsDiv = document.getElementById("productsDiv");
function fetchData(url, div, num) {
  fetch(url)
    .then(function (data) {
      return data.json(); //json function will convert the JSON data into original data
    })
    .then(function (data) {
      //   console.log(data.products, "ARRAY");
      //   console.log(data.products[0]);
      if (div) {
        if (div === productsDiv) {
          for (let i = 0; i < data.products.length; i++) {
            // if (i < num && num !== 0) {
            div.innerHTML += `<div class="cursor-pointer" style="margin:2rem;">
        <h1>${data.products[i].title}</h1>
        <img  src='${data.products[i].thumbnail}'/>
        </div>`;
            // }
          }
        }
        // console.log(arr,'NUM')
        for (let i = 0; i < data.products.length; i++) {
          if (i < num && num !== 0) {
            div.innerHTML += `<div class="cursor-pointer" style="margin:2rem;">
        <h1>${data.products[i].title}</h1>
        <img  src='${data.products[i].thumbnail}'/>
        </div>`;
          }
        }
      }
    });
} //Functional Programming (Expose)
fetchData("https://dummyjson.com/products", products, 4);
fetchData("https://dummyjson.com/products", productsDiv, 0);
