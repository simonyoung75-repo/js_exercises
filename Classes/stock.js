/**
This is where i will put my stock, or change my stock
Currenly this needs to be done in a basic way as i havent figured out how to have multiples where there are
some shared properties but some different (i.e. Boot cut in 48, 50 and 56 waist withough objects like bootCut32, bootCut34)

I will create a few pairs of jeans, but then change one of them and console out
 */

import { Jeans, Shirt, Socks } from "./classes.js";

//Jeans
const bootCut = new Jeans("Boot Cut", 48, 33, "Blue");
const skinny = new Jeans("Skinny Jeans", 36, 30, "Grey");
const looseFit = new Jeans("Loose Fit", 50, 32, "Black");

//Shirts - dont ask me why it formats these differently whan i save!!
const dressShirt = new Shirt(
  "Formal Dress Shirt",
  "Long Sleeves / Double Cuffed",
  28,
  "White",
);
const summerShirt = new Shirt(
  "Loose fitting cotton shirt",
  "Short Sleeves",
  "Medium",
  "Yellow and Orange",
);

//Socks
const longSocks = new Socks("Long Socks", "Large", 5, "Black");
const shortSocks = new Socks("Short Socks", "Large", 5, "Blue");
const trainerSocks = new Socks("Trainer Socks", "Large", 3, "White");

console.log("What Jeans do we have: ", bootCut, skinny, looseFit);
console.log("What Shirts do we have: ", dressShirt, summerShirt);
console.log("What Socks do we have: ", longSocks, shortSocks, trainerSocks);
