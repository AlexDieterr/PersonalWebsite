import { Routes } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    { path: '', component: HeroComponent }, // Hero as the homepage
    { path: 'contact', component: ContactComponent } // Contact page
  ];