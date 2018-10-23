import { Injectable } from '@angular/core';
import { ProjectIdea } from 'src/_models/project-idea';
import { ProjectIdeas } from 'src/_data/projects';
import { Filter } from 'src/_models/filter';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs';
import {IProjectService} from './IProject-service';
import {Language} from '../_models/language';
import {Category} from '../_models/category';

@Injectable({
  providedIn: 'root'
})
export class ProjectService{

  private projectIdeas : ProjectIdea[] = ProjectIdeas;

  getProjects(filter : Filter) : Observable<ProjectIdea[]>{
    let projects = this.projectIdeas;
    
    if(filter.author){
      projects = projects.filter(
        p => p.author.name.indexOf(filter.author) > -1 
             && p.author.username.indexOf(filter.author) > -1 
      );
    }

    if(filter.category){
      projects = projects.filter(
        p => p.categories.includes(Category[filter.category])
      );
    }

    if(filter.language){
      projects = projects.filter(
        p => p.recommendedLanguages.includes(Language[filter.language])
      );
    }

    return of(projects);
  }


}
