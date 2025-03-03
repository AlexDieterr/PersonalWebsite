import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/home/home.component';
import { ProjectDetailsComponent } from './app/project-details/project-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'projects/:id', component: ProjectDetailsComponent },
  { path: '**', redirectTo: '' }
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).catch((err) => console.error(err));