import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/home/home.component';
import { ProjectDetailsComponent } from './app/project-details/project-details.component';
import { pdfDefaultOptions } from 'ng2-pdf-viewer';

// 🔧 Fix Vite warning: Set the workerSrc manually
pdfDefaultOptions.workerSrc = 'assets/pdf.worker.min.js';

const routes: Routes = [
  { path: '', component: HomeComponent }, // ✅ Home Page
  { path: 'projects/:id', component: ProjectDetailsComponent }, // ✅ Project Details Page
  { path: '**', redirectTo: '' } // ✅ Redirect invalid URLs to home
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
}).catch((err) => console.error(err));