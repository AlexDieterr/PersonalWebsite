import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  imports: [RouterModule],
  styleUrls: ['./header.component.scss'],
  standalone: true
})
export class HeaderComponent {
  isMenuOpen = false; 

  constructor(private router: Router) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  goHome() {
    console.log('hello')
    this.router.navigate(['/']);
  }
  scrollToContact() {
    const contactSection = document.getElementById('contact'); // Find the contact section
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' }); // Smoothly scroll to it
    }
  }
  scrollToAbout() {
    const aboutSection = document.getElementById('about'); // Find the contact section
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' }); // Smoothly scroll to it
    }
  }
  scrollToProjects() {
    const projectsSection = document.getElementById('projects'); // Find the contact section
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' }); // Smoothly scroll to it
    }
  }
}