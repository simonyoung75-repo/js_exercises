/**
Taking the code from the classes activity to put this into the browser, not just the console
*/

export class Jeans {
  constructor(name, style, waist, leg_len, colour) {
    this.name = name;
    this.style = style;
    this.waist = waist;
    this.leg_len = leg_len;
    this.colour = colour;
  }

  newJeansDetails(nam, sty, wai, leg, col) {
    this.name = nam;
    this.style = sty;
    this.waist = wai;
    this.leg_len = leg;
    this.colour = col;
  }
}

export class Shirt {
  constructor(name, style, sleeves, colar_size, colour) {
    this.name = name;
    this.style = style;
    this.sleeves = sleeves;
    this.colar_size = colar_size;
    this.colour = colour;
  }

  newShirtDetails(nam, sty, sle, neck, col) {
    this.name = nam;
    this.style = sty;
    this.sleeves = sle;
    this.colar_size = neck;
    this.colour = col;
  }
}

export class Socks {
  constructor(style, description, packSize, footSize, colour) {
    this.style = style;
    this.description = description;
    this.packSize = packSize;
    this.size = footSize;
    this.colour = colour;
  }

  newSocksDetails(sty, desc, pack, size, col) {
    this.style = sty;
    this.desscription = desc;
    this.packSize = pack;
    this.footSize = size;
    this.colour = col;
  }
}
