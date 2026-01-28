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
const longSocks = new Socks(
  "Long Socks",
  "As we all enjoy the longer sock",
  "5 pairs",
  "Large",
  "Black",
);
const shortSocks = new Socks(
  "Short Socks",
  "Better with shorts",
  "5 pairs",
  "Medium",
  "Blue",
);
const trainerSocks = new Socks(
  "Trainer Socks",
  "Show ne some ankles",
  "3 pairs",
  "Large",
  "White",
);

/**
Note the following are backticks (next to z on kb) not ' or " and means its a template litteral.
I  also accept we shouldnt put stuff in here, but this was the way they did in the lesson, and as yet
Im not sure how to do that... I did move style to style.css though (and googled to make it prettier)
and know i should have things in arrays ratehr than repeating lines, but again, not there yet!
 */

const browserContent = `

<!-- This is the content on the browser page, is used $ {} at this is where its pulling js objects in -->

    <main>
    <section class="row">
      <article class="headline">
        <h1> This is my shop</h1>
        We sell everything from ${bootCut.name} and ${skinny.name} to ${dressShirt.name} and ${longSocks.style}.
        <br></br>
        So pick what you need and your new pack of ${trainerSocks.packSize} of ${shortSocks.style} will be on their way!
      </article>
    </section>
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
          <li>Style:  ${skinny.style}</li>
          <li>Waist:  ${skinny.waist}</li>
          <li>Leg:   ${skinny.leg_len}</li>
          <li>Colour:   ${skinny.colour}</li>
        </ul>
        <ul>
      </article>
      <article>
        <h1>${looseFit.name}</h1>
        <ul>
          <li>Style:  ${looseFit.style}</li>
          <li>Waist:  ${looseFit.waist}</li>
          <li>Leg:   ${looseFit.leg_len}</li>
          <li>Colour:   ${looseFit.colour}</li>
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
          <li>Description: ${longSocks.description}</li>
          <li>Pack Size: ${longSocks.packSize}</li>
          <li>Foot Size: ${longSocks.size}</li>
          <li>Colour: ${longSocks.colour}</li>
        </ul>
      </article>
      <article>
        <h1>${shortSocks.style}</h1>
        <ul>
          <li>Description: ${shortSocks.description}</li>
          <li>Pack Size: ${shortSocks.packSize}</li>
          <li>Foot Size: ${shortSocks.size}</li>
          <li>Colour: ${shortSocks.colour}</li>
        </ul>
      </article>
      <article>
        <h1>${trainerSocks.style}</h1>
        <ul>
          <li>Description: ${trainerSocks.description}</li>
          <li>Pack Size: ${trainerSocks.packSize}</li>
          <li>Foot Size: ${trainerSocks.size}</li>
          <li>Colour: ${trainerSocks.colour}</li>
        </ul>
      </article>
    </section>
    </main>
`;

document.body.innerHTML = browserContent;
