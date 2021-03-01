import jokes from "./jokes.png";
import stw from "./stw.png";
import cars from "./cars.png";
import books from "./books.png";
import receipes from "./rceipes.png";
import blog from "./blog.png";

export const projects = [
   {
      name: "Bookstore",
      src: books,
      text:"A CRUD app in which you can see the books stored in MongoDB and can edit or delete. Other technologies used are Chakra UI, React Query and NextJS.",
      icons:["HTML5","ChakraUI","NextJS","MongoDB"],
      code: "https://github.com/laur80/bookstore",
      live: "https://bookstore-five.vercel.app/"
  },
   {
      name: "Blog",
      src: blog,
      text:"A simple blog made in NodeJS-Express, EJS-templating engine and using MongoDB as storage.The application is hosted on Heroku(the page may take a while to load).",
      icons:["EJS","CSS3","NodeJS-Express","MongoDB"],
      code: "https://github.com/laur80/LPblog",
      live: "https://blog-laur.herokuapp.com/blogs" 
  },
   {
      name: "RecipesSearch",
      src: receipes,
      text:"An application in Next-the React framework, for searching recipes built around edamam.com/food-database-api. Searches are limited to 10 per minute, so the request is made only when the button was pressed",
      icons:["TypeScript","Bootstrap5","NextTS","Axios"],
      code: "https://github.com/laur80/Recipes-search",
      live: "https://recipes-search-steel.vercel.app/" 
  },
  {
   name: "Star-Wars",
   src: stw,
   text:"Using data from the Star Wars API, it is displayed on multiple pages and cached using React Query.",
   icons:["TypeScript","CSS3","NextTS","ReactQuery"],
   code: "https://github.com/laur80/Star-Wars",
   live: "https://star-wars-laur80.vercel.app/"
},
    {
        name: "DadJokesApp",
        src: jokes,
        text:"An app that lets people view and vote on cheesy jokes.To generate jokes, I use the ICanHazDadJoke API.The list of jokes, with votes is stored in local storage.",
        icons:["HTML5","CSS3","React","Api"],
        code: "https://github.com/laur80/dad-jokes/tree/f538eaeab1d30a989950d4b81cef2a743d2746a3",
        live: "https://laur80.github.io/dad-jokes/" 
    },
    {
      name: "CarsGame",
      src: cars,
      text:"A game using JavaScript and DOM manipulation.The user will use the arrows to navigate the traffic.Progress will be recorded and displayed in the event of a collision.",
      icons:["HTML5","CSS3","JS","DOM"],
      code: "https://github.com/laur80/Car-Driving-Game",
      live: "https://laur80.github.io/Car-Driving-Game/"
  },
]
