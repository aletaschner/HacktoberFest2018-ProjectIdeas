import { Component, OnInit } from '@angular/core';
import { Filter } from 'src/_models/filter';
import { ProjectService } from 'src/_services/project.service';
import { Language } from 'src/_models/language';
import { Category } from 'src/_models/category';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  projectIdeas;
  filter: Filter = {};
  languages = Language;
  categories = Category;
  filterForm : FormGroup = new FormGroup({
    category: new FormControl(''),
    language: new FormControl(''),
    text: new FormControl('')
  });

  constructor(private projectService : ProjectService) { }

  ngOnInit() {
    this.getProjects();
  }

  get category(){
    return this.filterForm.get('category');
  }

  get language(){
    return this.filterForm.get('language');
  }

  get text() {
    return this.filterForm.get('text');
  }

  toKeys(object) : Array<string>{
    let keys = Object.keys(object);
    return keys.splice(0, keys.length / 2);;
  }

  sendForm(){
    this.filter = this.filterForm.value;
    this.getProjects();
  }

  getProjects(){
    this.projectService.getProjects(this.filter).subscribe(projects => this.projectIdeas = projects);
  }

}
