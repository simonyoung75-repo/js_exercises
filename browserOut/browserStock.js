/**
This is where i will create a const for the browser output, and get the classes from browserClasses
and then take the details below to display in the browser window directly
 */

import { Jeans, Shirt, Socks } from "./browserClasses.js";

//Jeans
const bootCut = new Jeans(
  "Boot Cut Jeans",
  "More flared at the bottom",
  48,
  33,
  "Blue",
);
const skinny = new Jeans(
  "Skinny Jeans",
  "Only for weirdos in converse",
  36,
  30,
  "Grey",
);
const looseFit = new Jeans(
  "Loose Fit Jeans",
  "Just more comfy",
  50,
  32,
  "Black",
);

//Shirts
const dressShirt = new Shirt(
  "Formal Dress Shirt",
  "Great for suits",
  "Long Sleeves / Double Cuffed",
  28,
  "White",
);
const summerShirt = new Shirt(
  "Loose fitting cotton shirt",
  "Great for summer in the pub",
  "Short Sleeves",
  "Medium",
  "Yellow and Orange",
);

//Socks
const longSocks = new Socks("Long Socks", "5 pairs", "Large", "Black");
const shortSocks = new Socks("Short Socks", "5 pairs", "Medium", "Blue");
const trainerSocks = new Socks("Trainer Socks", "3 pairs", "Large", "White");

//note the following are backticks (next to z on kb) not ' or " and means its a template litteral
const browserContent = `

<!-- This style section (admitadly googled) stops the stacked lists and creates the output in a line, and makes the boxes the same-->

<style>
      main {
        display: block;
        gap: 20px;
        justify-content: left;
        padding: 20px;
      } 
      .row {
        display: flex;
        gap: 20px;
        justify-content: left;
        margin-bottom: 20px;
      }
      article {
        flex: 1;
        max-width: 350px;
        border: 1px solid #ccc;
        border-radius: 8px;
        padding: 15px;
        background-color: #f9f9f9;
      }

      h1 {
        font-size: 1.2rem;
        margin-top: 0;
      }

      ul {
        list-style: none;
        padding: 0;
      }
  </style>

<!-- This is the content on the browser page, is used $ {} at this is where its pulling js objects in -->

    <main>
    <section class="row">
      <article>
        <h1>${bootCut.name}</h1>
        <ul>
          <li>Style: ${bootCut.style}</li>
          <li>Waist: ${bootCut.waist}</li>
          <li>Leg Length: ${bootCut.leg_len}</li>
          <li>Colour: ${bootCut.colour}</li>
        </ul>
      </article>
      <article>
        <h1>${skinny.name}</h1>
        <ul>
          <li>Style:  ${skinny.style}</l>
          <li>Waist:  ${skinny.waist}</l>
          <li>Leg:   ${skinny.leg_len}</l>
          <li>Colour:   ${skinny.colour}</l>
        </ul>
        <ul>
      </article>
      <article>
        <h1>${looseFit.name}</h1>
        <ul>
          <li>Style:  ${looseFit.style}</l>
          <li>Waist:  ${looseFit.waist}</l>
          <li>Leg:   ${looseFit.leg_len}</l>
          <li>Colour:   ${looseFit.colour}</l>
        </ul>
      </article>
    </section>
    <section class="row">
      <article>
        <h1>${dressShirt.name}</h1>
        <ul>
          <li>Style: ${dressShirt.style}</li>
          <li>Sleeves: ${dressShirt.sleeves}</li>
          <li>Colar Size: ${dressShirt.colar_size}</li>
          <li>Colour: ${dressShirt.colour}</li>
        </ul>
      </article>
      <article>
        <h1>${summerShirt.name}</h1>
        <ul>
          <li>Style: ${summerShirt.style}</li>
          <li>Sleeves: ${summerShirt.sleeves}</li>
          <li>Colar Size: ${summerShirt.colar_size}</li>
          <li>Colour: ${summerShirt.colour}</li>
        </ul>
      </article>
    </section>
    <section class="row">
      <article>
        <h1>${longSocks.style}</h1>
        <ul>
          <li>Pack Size: ${longSocks.packSize}</li>
          <li>Foot Size: ${longSocks.sizeize}</li>
          <li>Colour: ${longSocks.colour}</li>
        </ul>
      </article>
      <article>
        <h1>${shortSocks.style}</h1>
        <ul>
          <li>Pack Size: ${shortSocks.packSize}</li>
          <li>Foot Size: ${shortSocks.size}</li>
          <li>Colour: ${shortSocks.colour}</li>
        </ul>
      </article>
      <article>
        <h1>${trainerSocks.style}</h1>
        <ul>
          <li>Pack Size: ${trainerSocks.packSize}</li>
          <li>Foot Size: ${trainerSocks.size}</li>
          <li>Colour: ${trainerSocks.colour}</li>
        </ul>
      </article>
    </section>
    </main>
`;

document.body.innerHTML = browserContent;
