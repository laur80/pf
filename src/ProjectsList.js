import jokes from "./jokes.png";
import dogs from "./dogs.png";
import cars from "./cars.png";
import hang from "./hangman.png";
import lightGame from "./Lgame.png";
import todos from "./todo.png";

export const projects = [
    {
        name: "DadJokesApp",
        src: jokes,
        text:"An app that lets people view and vote on cheesy jokes.To generate jokes, I use the ICanHazDadJoke API.The list of jokes, with votes is stored in local storage.",
        icons:["HTML5","CSS3","React","Api"],
        code: "https://github.com/laur80/dad-jokes/tree/f538eaeab1d30a989950d4b81cef2a743d2746a3",
        live: "https://laur80.github.io/dad-jokes/" 
    },
    {
        name: "DogList",
        src: dogs,
        text:"A simple application using React-router.Each dog have its own unique route.Every other endpoint not listed should redirect you to /dogs.",
        icons:["HTML5","CSS3","Bootstrap","React"],
        code: "https://github.com/laur80/router-dogs",
        live: "https://dog-web.netlify.app/dogs" 
    },
    {
        name: "CarsGame",
        src: cars,
        text:"A game using JavaScript and DOM manipulation.The user will use the arrows to navigate the traffic.Progress will be recorded and displayed in the event of a collision.",
        icons:["HTML5","CSS3","JS","DOM"],
        code: "https://github.com/laur80/Car-Driving-Game",
        live: "https://laur80.github.io/Car-Driving-Game/"
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
        name: "TodoList",
        src: todos,
        text:" A Todo App that allows users to see, add, edit, and remove todos.Using React-hooks,useState, and local storage to give functionality.",
        icons:["HTML5","MaterialUI","React","State"],
        code: "https://github.com/laur80/todo-list/commits/master",
        live: "https://laur80.github.io/todo-list/" 
    },
]
