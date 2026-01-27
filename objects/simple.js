const fruit = {
  apples: 2,
  oranges: 5,
  banana: 4,

  ammendFruit: function (app, ora, ban) {
    this.apples = app;
    this.oranges = ora;
    this.banana = ban;
  },
};

console.log(
  "Apples before:",
  fruit.apples,
  "Oranges before:",
  fruit.oranges,
  "Bananas before:",
  fruit.banana,
);

fruit.ammendFruit(1, 4, 1);

console.log(
  "Apples aftere:",
  fruit.apples,
  "Oranges after:",
  fruit.oranges,
  "Bananas after:",
  fruit.banana,
);
