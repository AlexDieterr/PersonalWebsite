import { Component, Inject, PLATFORM_ID, AfterViewInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  scrollToContact() {
    if (isPlatformBrowser(this.platformId)) {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }

  scrollToProjects() {
    if (isPlatformBrowser(this.platformId)) {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        const nameElement = document.querySelector('.name');
        if (nameElement) {
          nameElement.classList.add('typing-done');
        }
      }, 2000);
    }
  }
}
