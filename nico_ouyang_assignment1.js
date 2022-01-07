// Nico Assignment 2
const itemsObject = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];
//Given the array, implement a function for generating a new array which doubles the quantity and price in each object
const items1 = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];
const doubleArray = (array) => {
  array.forEach((element) => {
    element.quantity *= 2;
    element.price *= 2;
  });
  return array;
};
console.log(doubleArray(items1));

//Given the array, implement a function for generating a new array which contains item quantity > 2 and price > 300 only
const items2 = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];
const checkArray = (items2) => {
  const check = items2.filter(
    (element) => element.price > 300 && element.quantity > 2
  );
  return check;
};
console.log(checkArray(items2));

//Given the array, implement a function to calculate the total value of the items
const items3 = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];
const totalvalue = (array) => {
  let sum = 0;
  array.forEach((element) => {
    sum += element.quantity * element.price;
  });
  return sum;
};
console.log(totalvalue(items3));

//Given the string, implement a function to remove all the non-alphabet characters and extra space in the string and convert the string to all lowercase.
const str =
  " Perhaps The Easiest-to-understand Case For Reduce Is To Return The Sum Of All The Elements In An Array ";
const convert = (str) => {
  const newstring = str.trim().split(/[-, ]/).join(" ").toLowerCase();
  return newstring;
};
console.log(convert(str));
