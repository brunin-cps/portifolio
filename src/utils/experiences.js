import Sidi from '../assets/sidi.png'
import Stepwise from '../assets/stepwise-bl.png'

export default function getAllExperiences() {
  return [
    {
      color: "gray",
      id: 1,
      data: "May 2023 - Dec 2023",
      titulo: "Test Engineer - Sidi",
      decricao: "In my role at SiDi, my primary responsibility was to assist the QA team in various tasks, encompassing the creation and execution of manual tests, as well as the development of automated tests.",
      imagem: Sidi

    },
    {
      color: "yellow",
      id: 2,
      data: "Nov 2022 - Apr 2023",
      titulo: "Frontend Developer - Stepwise",
      decricao: "Responsible to create and update web pages with Vue.js framework and SCSS using Azure as cloud service(Repository, Boards, Pipeline). Furthermore, I also learned to develop end-to-end test cases with Cypress.",
      imagem: Stepwise

    },
  ];
}