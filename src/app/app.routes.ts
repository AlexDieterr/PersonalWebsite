import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'projects/:id', component: ProjectDetailsComponent },
    { path: '**', redirectTo: '' }
  ];
