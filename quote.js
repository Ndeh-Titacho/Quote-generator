//variables
const btn = document.querySelector("#new-quotes");
const quotes = document.querySelector(".quote");
const prsn = document.querySelector(".person");

btn.addEventListener("click", function () {
  let random = Math.floor(Math.random() * Quotes.length);
  quotes.innerText = Quotes[random].quotes;
  prsn.innerText = Quotes[random].prsn;
});
const Quotes = [
  {
    quotes:
      "“Every child is an artist; the problem is staying an artist when you grow up” ",
    prsn: "Pablo Picasso",
  },
  {
    quotes:
      "“Don’t think about making art, just get it done. Let everyone else decide if it’s good or bad, whether they love it or hate it. While they are deciding, make even more art.”",
    prsn: " Andy Warhol",
  },
  {
    quotes:
      "“Art is a collaboration between God and the artist, and the less the artist does the better.”",
    prsn: "Andre Gide",
  },
  {
    quotes: "“Every artist was first an amateur.”",
    prsn: "Ralph Waldo Emerson",
  },
  {
    quotes:
      "“I found I could say things with color and shapes that I couldn’t say any other way – things I had no words for.”",
    prsn: " Georgia O’Keeffe",
  },
  {
    quotes:
      "“There are always going to be bad things. But you can write it down and make a song out of it’.”",
    prsn: "Billie Eilish",
  },
  {
    quotes:
      "“The moment you start thinking about what other people and other artists think, you’re going to start writing like other people.”",
    prsn: " Rex Orange County",
  },
  {
    quotes: "“I don’t make music for eyes; I make music for ears.”",
    prsn: " Adele",
  },
  {
    quotes:
      "“I don’t know where I’m going from here, but I promise it won’t be boring.” ",
    prsn: " David Bowie",
  },
  {
    quotes:
      "“I used to get upset by people not understanding me, but I’ve made a career out of it now.”",
    prsn: "Ozzie Osbourne",
  },
  { quotes: '"Take absolutely nothing personal."', prsn: "Mah Marieta" },
];
