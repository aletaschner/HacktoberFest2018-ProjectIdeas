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
        url: ""
    },
    {
        title : "Manga/Anime without ads integrated with steemit.",
        author: {name: "Pablo Bianco", username: "marce1994"},
        categories: [Category.Website],
        description: "Today there are a lot of ads whenever you are, the idea is to make an ad-free place to watch and share anime/manga related content, where the contributors can get rewarded by a social network like steemit.\n Tecnologies: IPFS, Angular, Steemit, Webtorrent(maybe)",
        recommendedLanguages: [Language.Javascript, Language.CSharp],
        url: ""
    },
    {
        title : "Use machine learning to decide when it's ideal to go on a ride during a chosen day",
        author: {name: "Denny Cao", username: "DennyizHere"},
        categories: [Category.Website],
        description: "I did a smaller scale of this, but it'll be amazing to see if others can make this bigger. Run scripts to get information on the wait times at certain rides at a theme park at a given day. Then use machine learning and run the dataset to see which ride would be best to queue up for at a given time. Many things to consider like what if the park is hosting a holiday event, ride preference, etc.",
        recommendedLanguages: [Language.Javascript, Language.Python],
        url: ""
    },
    {
        title : "A place to share user made body exercises",
        author: {name: "Luiz Monge", username: "MajorMonge"},
        categories: [Category.Website],
        description: "A intuitive and quick place to share, view and rate body exercises.",
        recommendedLanguages: [Language.Javascript, Language.Python],
        url: ""
    }
];
