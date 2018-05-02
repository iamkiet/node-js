const express = require('express');

const app = express();

let fruits = ['apple', 'orange', 'cherry', 'banana'];
fruits.map((fruit, index, fruits) => {
  return "this is " + fruit;
})

// let newFruits = fruits.map((fruit, index, fruits) => {
//   return {
//     value: fruit + " edited",
//     index: index
//   }
// })

fruits.forEach(fruit => {
  console.log(fruit);
})

app.listen(3000, () => {
  console.log("App listen port 3000");
})