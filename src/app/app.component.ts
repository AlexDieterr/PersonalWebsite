import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterModule, HeaderComponent],
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}
  
  ngOnInit(): void {
    this.pingTrafficApi();
  }
  pingTrafficApi(): void {
    this.http.get('https://trafficsignnn.onrender.com/health').subscribe({
      next: () => {
        // Warm predict endpoint (no UI impact)
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
      error: () => {}
    });
  }
  scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
}