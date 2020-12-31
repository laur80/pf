import jokes from "./jokes.png";
import dogs from "./dogs.png";
import cars from "./cars.png";
import hang from "./hangman.png";
import lightGame from "./Lgame.png";
import todos from "./todo.png";

let textJoke=" Lorem ipsum dolor sit amet consectetur adipisicing elit.Natus porro eius nisi,sint culpa, quisquam sapiente,placeat asperiores similique id dolores tempore assumenda"

export const projects = [
    {
        name: "DadJokesApp",
        src: jokes,
        text:textJoke,
        code: "https://github.com/laur80/dad-jokes",
        live: "https://laur80.github.io/dad-jokes/" 
    },
    {
        name: "DogsWeb",
        src: dogs,
        text:textJoke,
        code: "https://github.com/laur80/router-dogs",
        live: "https://laur80.github.io/dogs" 
    },
    {
        name: "CarsGame",
        src: cars,
        text:textJoke,
        code: "https://github.com/laur80/Car-Driving-Game",
        live: "https://laur80.github.io/Car-Driving-Game/"
    },
    {
        name: "HangmanGame",
        src: hang,
        text:textJoke,
        code: "https://github.com/laur80/hangman",
        live: "https://laur80.github.io/hangman/"
    },
    {
        name: "LightsOutGame",
        src: lightGame,
        text:textJoke,
        code: "https://github.com/laur80/lights-out-game",
        live: "https://laur80.github.io/lights-out-game/"
    },
    {
        name: "TodoList",
        src: todos,
        text:textJoke,
        code: "https://github.com/laur80/todo-list",
        live: "https://laur80.github.io/todo-list/" 
    },
]
