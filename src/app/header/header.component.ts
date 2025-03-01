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
    this.router.navigate(['/']);
  }

  /**
   * Navigates to the home page if needed, then scrolls to the element with the provided ID.
   */
  scrollToSection(sectionId: string) {
    if (this.router.url !== '/') {
      this.router.navigate(['/']).then(() => {
        setTimeout(() => {
          const section = document.getElementById(sectionId);
          if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100); // Adjust delay if needed
      });
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }

  scrollToContact() {
    this.scrollToSection('contact');
  }

  scrollToAbout() {
    this.scrollToSection('about');
  }

  scrollToProjects() {
    this.scrollToSection('projects');
  }
}