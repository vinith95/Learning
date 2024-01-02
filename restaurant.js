"use strict";
// usage of this keyword
const restaurant = {
  name: "saravana bhavan",
  location: "Nallur Tirurpur",
  categories: ["Veg", "Non-veg", "Dessert"],
  starterMenu: [
    "Mothi laddu",
    "Badusha",
    "halwa",
    "chilly panner dry",
    "kadai panneer",
  ],
  mainMenu: ["panneer pulao", "mashroom pulao", "jeer rice", "veg pulao"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 12,
      close: 22,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },
  order: function (starterindex, mainIndex) {
    return [this.starterMenu[starterindex], this.mainMenu[mainIndex]];
  },
  orderDelvery: function ({ starterindex, mainIndex, address, time }) {
    console.log(
      `Order Received at ${time}, ${this.mainMenu[mainIndex]} and ${this.starterMenu[starterindex]} will be delivered to this ${address}`
    );
  },
};
restaurant.orderDelvery({
  time: "12:30",
  starterindex: 2,
  mainIndex: 2,
  address: "Nallur Muthanampalayam",
});

// Array destructure
const [starter, main] = restaurant.order(2, 1);
console.log(starter, main);

const nested = [1, 2, 3, [1, 2, 3]];

const [i, , j, [k, l, m, n]] = nested;
console.log(i, k, l, m, n);

// Object destructure
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

const { menu = ["idly", "dosa"] } = restaurant;
console.log("menu:", menu);

// Mutating Variables
let a = 111;
let b = 222;

const obj = { a: 22, b: 78 };
({ a, b } = obj);
console.log(a, b);

// nested objects
const {
  fri: { open, close },
} = openingHours;
// console.log('fri:', fri)
console.log(open, close);

