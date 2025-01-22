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
}