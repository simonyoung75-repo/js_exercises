/** Cosnt eseentially creates objects in JS, that have attributes linked to them that can be changed
note: const actually stands for constant. It just means you cannot reassign the variable box to a brand new value 
(like a string or a different object) */
const box = {
  material: "Cardboard",
  ammount: 100,
  dimensions: {
    length: 20,
    width: 20,
    height: 20,
  },

  /**. this next bit is a method (so a function that is integral to an object - const)
the function is called newBoxdims, and will be called later using () after - so box.newBoxDims () */
  newBoxDims: function (len, wid, hei) {
    this.dimensions.length = len;
    this.dimensions.width = wid;
    this.dimensions.height = hei;
  },
};

const people = {
  Simon: {
    Gender: "Male",
    Age: 51,
    email: "simon@java.dude",
  },
  Kirstie: {
    Gender: "Female",
    Age: 40,
    email: "kistie@cant.code",
  },
};

// embedding (nesting) objects, where in this case, Scredrivers is nested in garage.tools
const garage = {
  Tools: {
    Drills: 4,
    Welders: 1,
    Plasma: 1,
    Screwdrivers: {
      Philips: 12,
      Flathead: 9,
    },
  },

  Materials: {
    Wood: "Oak and marine ply",
    Metal: "Type 42 steel plates (3mm)",
    Foam: "EVA 25mm for modelling - Black",
  },

  Bikes: {
    Simon: 1,
    Kirstie: 0,
    Ollie: 1,
    Maisie: 1,
  },
};

// these basically send the information to the console in the browswer
console.log("The box object", box);
console.log("The people", people);
console.log("People, Specificly simon using dot notation", people.Simon);
console.log(
  "Bikes from the garage object using bracket notation",
  garage["Bikes"],
);

// grabs the dimentions before we call the method and consoles out
console.log(
  "Length before:",
  box.dimensions.length,
  "Width before:",
  box.dimensions.width,
  "Height before:",
  box.dimensions.height,
);

// calls the method, resets the values
box.newBoxDims(60, 50, 40);

//grabs the new dimentions and sends to the console
console.log(
  "Length after:",
  box.dimensions.length,
  "Width after:",
  box.dimensions.width,
  "Height after:",
  box.dimensions.height,
);
