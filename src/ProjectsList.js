import jokes from "./jokes.png";
import dogs from "./dogs.png";
import cars from "./cars.png";
import hang from "./hangman.png";
import lightGame from "./Lgame.png";
import todos from "./todo.png";
import receipes from "./rceipes.png";
import blog from "./blog.png";

export const projects = [
   {
      name: "Blog",
      src: blog,
      text:"A simple blog made in Express-NodeJS, EJS-templating engine and using MongoDB as storage.The application is hosted on Heroku(the page may take a while to load).",
      icons:["EJS","CSS3","Express-NodeJS","MongoDB"],
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
        name: "DadJokesApp",
        src: jokes,
        text:"An app that lets people view and vote on cheesy jokes.To generate jokes, I use the ICanHazDadJoke API.The list of jokes, with votes is stored in local storage.",
        icons:["HTML5","CSS3","React","Api"],
        code: "https://github.com/laur80/dad-jokes/tree/f538eaeab1d30a989950d4b81cef2a743d2746a3",
        live: "https://laur80.github.io/dad-jokes/" 
    },
    {
        name: "HangmanGame",
        src: hang,
        text:"The AlphaButtons component renders a sequence of buttons corresponding to letters.The Hangman component keeps track of which letters have been guessed.",
        icons:["HTML5","CSS3","React","State"],
        code: "https://github.com/laur80/hangman/tree/deploy",
        live: "https://laur80.github.io/hangman/"
    },
    {
        name: "LightsOutGame",
        src: lightGame,
        text:"Lights Out is a logic/puzzle game, played on a gird of individual lights, which can either be lit or unlit.The puzzle is won when when all of the lights are turned off.",
        icons:["HTML5","CSS3","React","State"],
        code: "https://github.com/laur80/lights-out-game/tree/6c563196f9202ff0b0004834af2ad373a80eaefa",
        live: "https://laur80.github.io/lights-out-game/"
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
