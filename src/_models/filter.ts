import { Category } from "./category";
import { Language } from "./language";

export interface Filter {
    category?: string;
    author?: string;
    language? : string;
}