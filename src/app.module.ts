import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatCardModule,
  MatChipsModule,
  MatDividerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatToolbarModule,
} from '@angular/material';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { DeviceDetectorModule } from 'ngx-device-detector';

import { AppComponent } from './_components/app/app.component';
import { HomeComponent } from './_components/home/home.component';
import { ProjectListComponent } from './_components/project-list/project-list.component';
import { ProjectService } from './_services/project.service';
import { NavbarComponent } from './_components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    HomeComponent,
    NavbarComponent    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    RouterModule.forRoot(
      [{
        path: '',
        component: HomeComponent
      },
      {
        path: 'projects',
        component: ProjectListComponent
      }]  
    ),
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
    MatMenuModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatDividerModule,
    DeviceDetectorModule.forRoot()
  ],
  providers: [
    ProjectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
