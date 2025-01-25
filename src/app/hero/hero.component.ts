import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  scrollToContact() {
    const contactSection = document.getElementById('contact'); // Find the contact section
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' }); // Smoothly scroll to it
    }
  }
}
