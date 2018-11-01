import { ProjectIdea } from "src/_models/project-idea";
import { Category } from "src/_models/category";
import { Language } from "src/_models/language";

export const ProjectIdeas : ProjectIdea[] = [
    {
        title : "Hacktoberfest 2018 Project Ideas",
        author: {name: "Alexandre Täschner", username: "aletaschner"},
        categories: [Category.Website],
        description: "Help people see their ideais developed by exposing them in an environment of people willing to contribute to open source powered by an website and a github repository",
        recommendedLanguages: [Language.Javascript],
        url: "https://github.com/aletaschner/HacktoberFest2018-ProjectIdeas"
    },
     {
        title : "Indicative of dangerous locations in the city",
        author: {name: "Felipe Putsch", username: "flpputsch"},
        categories: [Category.Website],
        description: "Create a page for indicative the most dangerous locations on the city using police data.",
        recommendedLanguages: [Language.Javascript],
        url: "https://github.com/marce1994/MyPWA"
    },
    {
        title : "Manga/Anime without ads integrated with steemit.",
        author: {name: "Pablo Bianco", username: "marce1994"},
        categories: [Category.Website],
        description: "Today there are a lot of ads whenever you are, the idea is to make an ad-free place to watch and share anime/manga related content, where the contributors can get rewarded by a social network like steemit.\n Tecnologies: IPFS, Angular, Steemit, Webtorrent(maybe)",
        recommendedLanguages: [Language.Javascript, Language.CSharp],
        url: ""
    }
];
