import HomePagePet from '../assets/home.png'
import ProjetosPet from '../assets/projetos.png'
import PetianosPet from '../assets/petianos.png'
import OmomuzApp1 from '../assets/omoluz1.png'
import OmomuzApp2 from '../assets/omoluz2.png'
import OmomuzApp3 from '../assets/omoluz3.png'
import OmomuzApp4 from '../assets/omoluz4.png'
import Proffy from '../assets/proffy1.png'

import Wood from '../assets/wood.png'
import Wood1 from '../assets/wood1.png'
import Wood2 from '../assets/picapau4.png'




export default function getAllProjects() {
  return [
    {
      color: "gray",
      id: 1,
      data: "2023",
      titulo: "Programa de Educacao Tutorial (PET)",
      decricao: "Web developer in an extracurricular extension group where I was responsible for coordinating a team of 6 people to maintain and develop the PET extension group's website. In this team, we used technologies such as React.js, React Hooks, React Router, JWT Token, and a REST API (built with Express.js framework) and the MariaDB database.",
      imagens: [HomePagePet, ProjetosPet, PetianosPet],
      link: "https://pet.icmc.usp.br/"

    },
    {
      color: "yellow",
      id: 2,
      data: "2021",
      titulo: "Omoluz",
      decricao: "Android message app connected with Firebase that was developed in my entrepreneurship class, the objective was to create an Minimum Viable Product(MVP) where the pacients of a Health Care plan could start a chat with a specialized Doctor.",
      imagens: [OmomuzApp1, OmomuzApp2, OmomuzApp3, OmomuzApp4],
      link: "https://github.com/brunin-cps/Omoluz"

    },
    {
      color: "green",
      id: 3,
      data: "2021",
      titulo: "Flappy Bird",
      decricao: "Project done when I was studding Android development focused in Games.  The game is Flappy Bird like,  but with the theme of the famous cartoon Woody-Woodpecker. To develop the game I used the framework LibGDX and Android Studio IDE.",
      imagens: [Wood, Wood1, Wood2],
      link: "https://github.com/brunin-cps/WoodyWoodpecker"

    },
    {
      color: "blue",
      id: 4,
      data: "2021",
      titulo: "Proffy",
      decricao: "This project was offered in nlw2 by Rocketseat with the purpouse of teach react and node. Proffy is a fictional service that allows teachers to offer lectures to students who are searching for online lessons.",
      imagens: [Proffy]

    }
  ];
}