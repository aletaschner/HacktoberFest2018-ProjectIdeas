import { Author } from "./Author";
import { Category } from "./category";
import { Language } from "./language";

export interface ProjectIdea {
    title: string;
    description: string;
    categories: Category[];
    author: Author;
    recommendedLanguages? : Language[];
    url? : string;
}
