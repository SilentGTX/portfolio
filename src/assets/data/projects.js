import { v4 as uuidv4 } from "uuid";
import BudgetImg from "../images/BudgetImg.png";
import CrwnImg from "../images/CrwnImg.png";
import NetflixImg from "../images/NetflixImg.png";
import BlackRedImg from "../images/BlackRedImg.png";

const projects = [
  {
    id: uuidv4(),
    name: "Crwn Clothing",
    desc: "React/Redux Ecommerce project from Udemy. Still working on it, not hosted.",
    img: CrwnImg,
    to: "//github.com/SilentGTX/crwn-clothing-remake",
  },
  {
    id: uuidv4(),
    name: "Netflix Clone",
    desc: "Just a Netflix clone currently in progress. Only the look is ready for now. Check it out.",
    img: NetflixImg,
    to: "//silentgtx.github.io/netflix-build/",
  },
  {
    id: uuidv4(),
    name: "Black-Red",
    desc: "One of my firts projects. Black-Red is a gambling game in which you have to guess the color of the next card",
    img: BlackRedImg,
    to: "//silentgtx.github.io/black-red/",
  },
  {
    id: uuidv4(),
    name: "Budget App",
    desc: "A money app that will show your available budget for the month. ",
    img: BudgetImg,
    to: "//silentgtx.github.io/Budget-App/",
  },
];

export default projects;
