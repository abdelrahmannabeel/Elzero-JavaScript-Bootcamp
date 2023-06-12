const game = {
  title: "YS",
  developer: "Falcom",
  releases: {
    "Oath In Felghana": ["USA", "Japan"],
    "Ark Of Napishtim": {
      US: "20 USD",
      JAP: "10 USD",
    },
    Origin: "30 USD",
  },
};

// Write Your Destructuring Assignment/s Here
let {
  title: t,
  developer: d,
  releases: { Origin: or },
} = game;
let [o, a] = Object.keys(game.releases);
let [u, j] = Object.values(game.releases)[0];
let { US: u_price, JAP: j_price } = Object.values(game.releases)[1];

console.log(`==============================================================`);
console.log(`My Favourite Games Style Is ${t} Style`);
console.log(`My Favourite Games Style Is YS Style`);
// My Favourite Games Style Is YS Style

console.log(`==============================================================`);
console.log(`And I Love ${d} Games`);
console.log(`And I Love Falcom Games`);
// And I Love Falcom Games

console.log(`==============================================================`);
console.log(`My Best Release Is ${o} It Released in ${u} & ${j}`);
console.log(`My Best Release Is Oath In Felghana It Released in USA & Japan`);
// My Best Release Is Oath In Felghana It Released in USA & Japan

console.log(`==============================================================`);
console.log(`Although I Love ${a}`);
console.log(`Although I Love Ark Of Napishtim`);
// Although I Love Ark Of Napishtim

console.log(`==============================================================`);
console.log(`${a} Price in USA Is ${u_price}`);
console.log(`Ark Of Napishtim Price in USA Is 20 USD`);
// Ark Of Napishtim Price in USA Is 20 USD

console.log(`==============================================================`);
console.log(`${a} Price in Japan Is ${j_price}`);
console.log(`Ark Of Napishtim Price in Japan Is 10 USD`);
// Ark Of Napishtim Price in Japan Is 10 USD

console.log(`==============================================================`);
console.log(`Origin Price Is ${or}`);
console.log(`Origin Price Is 30 USD`);
// Origin Price Is 30 USD
console.log(`==============================================================`);
