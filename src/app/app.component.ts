import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterModule, HeaderComponent,CommonModule],
})
export class AppComponent implements OnInit {
  showMobileNotice = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
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