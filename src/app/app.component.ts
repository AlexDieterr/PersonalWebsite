import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';

const LOADING_MIN_MS = 1500;

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterModule, HeaderComponent, CommonModule],
})
export class AppComponent implements OnInit {
  showMobileNotice = false;
  showLoading = true;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const elapsed = performance.now();
    const remaining = Math.max(0, LOADING_MIN_MS - elapsed);
    setTimeout(() => {
      this.showLoading = false;
    }, remaining);

    this.pingTrafficApi();
    this.checkMobileNotice();
  }

  checkMobileNotice(): void {
    const isMobile = window.innerWidth <= 768;
    const dismissed = localStorage.getItem('hideMobileNotice');

    if (isMobile && !dismissed) {
      this.showMobileNotice = true;
    }
  }

  dismissMobileNotice(): void {
    localStorage.setItem('hideMobileNotice', 'true');
    this.showMobileNotice = false;
  }

  pingTrafficApi(): void {
    this.http.get('https://trafficsignnn.onrender.com/health').subscribe({
      next: () => {
        const formData = new FormData();
        formData.append(
          'file',
          new Blob([], { type: 'image/png' }),
          'dummy.png'
        );

        this.http
          .post('https://trafficsignnn.onrender.com/predict', formData)
          .subscribe({ error: () => {} });
      },
      error: () => {},
    });
  }

  scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
}