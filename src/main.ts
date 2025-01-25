import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { HeroComponent } from './app/hero/hero.component';
import { AboutComponent } from './app/about/about.component';
import { ContactComponent } from './app/contact/contact.component';
import { AppComponent } from './app/app.component';

const routes: Routes = [
  { path: '', component: HeroComponent }, // Default route
  { path: 'about', component: AboutComponent }, // About Me route
  { path: 'contact', component: ContactComponent }, // Contact route
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)], // Provide the routes
}).catch((err) => console.error(err));