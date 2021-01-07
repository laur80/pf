import jokes from "./jokes.png";
import dogs from "./dogs.png";
import cars from "./cars.png";
import hang from "./hangman.png";
import lightGame from "./Lgame.png";
import todos from "./todo.png";
import {FaHtml5} from "react-icons/fa"
import {SiCss3} from "react-icons/si"
import {SiJavascript} from "react-icons/si"
import {FaBootstrap} from "react-icons/fa"
import {SiMaterialUi} from "react-icons/si"
import {FaReact} from "react-icons/fa"
import {DiResponsive} from "react-icons/di"
import {AiOutlineApi} from "react-icons/ai"
import {GiMatterStates} from "react-icons/gi"


let textJoke="ex"

export const projects = [
    {
        name: "DadJokesApp",
        src: jokes,
        text:"An app that lets people view and vote on cheesy jokes.To generate jokes, I use the ICanHazDadJoke API.The list of jokes, with votes is stored in local storage.",
        icons:[FaHtml5,SiCss3,FaReact,AiOutlineApi,DiResponsive],
        code: "https://github.com/laur80/dad-jokes",
        live: "https://laur80.github.io/dad-jokes/" 
    },
    {
        name: "DogsWeb",
        src: dogs,
        text:"A simple application using React-router.Each dog have its own unique route.Every other endpoint not listed should redirect you to /dogs.",
        icons:[FaHtml5,SiCss3,FaBootstrap,FaReact,DiResponsive],
        code: "https://github.com/laur80/router-dogs",
        live: "https://laur80.github.io/dogs" 
    },
    {
        name: "CarsGame",
        src: cars,
        text:"A game using JavaScript and dom manipulation.The user will use the arrows to navigate the traffic.Progress will be recorded and displayed in the event of a collision.",
        icons:[FaHtml5,SiCss3,SiJavascript],
        code: "https://github.com/laur80/Car-Driving-Game",
        live: "https://laur80.github.io/Car-Driving-Game/"
    },
    {
        name: "HangmanGame",
        src: hang,
        text:"The AlphaButtons component renders a sequence of buttons corresponding to letters.The Hangman component keeps track of which letters have been guessed.",
        icons:[FaHtml5,SiCss3,FaReact,GiMatterStates],
        code: "https://github.com/laur80/hangman",
        live: "https://laur80.github.io/hangman/"
    },
    {
        name: "LightsOutGame",
        src: lightGame,
        text:"Lights Out is a logic/puzzle game, played on a gird of individual lights, which can either be lit or unlit.The puzzle is won when when all of the lights are turned off.",
        icons:[FaHtml5,SiCss3,FaReact,DiResponsive],
        code: "https://github.com/laur80/lights-out-game",
        live: "https://laur80.github.io/lights-out-game/"
    },
    {
        name: "TodoList",
        src: todos,
        text:" A Todo App that allows users to see, add, edit, and remove todos.Using React-hooks,useState, and local storage to give functionality.",
        icons:[FaHtml5,SiCss3,SiMaterialUi,FaReact],
        code: "https://github.com/laur80/todo-list",
        live: "https://laur80.github.io/todo-list/" 
    },
]
