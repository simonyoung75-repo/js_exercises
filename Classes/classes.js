/**
Creating classes: There are two approaches 
*  Class declaration: class Name {}  -  so class Jeans { }
*  Class expression:  const Name = class {}  -  so const jeans = class { }
Desnt matter which you use, they work exactly the same way, just pick the one you prefer

Below i am going to create 3 classes for my shop

NOTE:  When i first wrote this, i had clas ... {} then 'export default Jeans; Shirt; Socks;' at the end
This worked, but when i consoled out, everything shoed as jeans.  i used google to ask why, and apparently that 
way wil do that as it can only have the one 'default' (which makes sense now i know) so it suggested each class
should have export in front of it

*/

export class Jeans {
  constructor(
    // Defines parameters:
    style, //boot cut, skinny etc
    waist, //in inches
    leg_len, //in inches
    colour, //bleu, black etc
  ) {
    // Define properties:
    this.style = style;
    this.waist = waist;
    this.leg_len = leg_len;
    this.colour = colour;
  }

  // Add methods like normal functions:
  newJeansDetails(sty, wai, leg, col) {
    this.style = sty;
    this.waist = wai;
    this.leg_len = leg;
    this.colour = col;
  }
}

export class Shirt {
  constructor(
    // Defines parameters:
    style, //formal, casual etc
    sleeves, //short, long
    colar_size, //in inches
    colour, //blue, black etc
  ) {
    // Define properties:
    this.style = style;
    this.sleeves = sleeves;
    this.colar_size = colar_size;
    this.colour = colour;
  }

  // Add methods like normal functions:
  newShirtDetails(sty, sle, neck, col) {
    this.style = sty;
    this.sleeves = sle;
    this.colar_size = neck;
    this.colour = col;
  }
}

export class Socks {
  constructor(
    // Defines parameters:
    style, //plain, pattern etc
    size, //small, med, large
    ammount, //how many pairs in the pack
    colour, // blue, black etc
  ) {
    // Define properties:
    this.style = style;
    this.size = size;
    this.ammount = ammount;
    this.colour = colour;
  }

  // Add methods like normal functions:
  newJeansDetails(sty, size, amm, col) {
    this.style = sty;
    this.size = size;
    this.ammount = amm;
    this.colour = col;
  }
}
