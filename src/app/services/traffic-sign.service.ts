import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrafficSignService {

  private API_URL = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) {}

  getRandomImages(n: number = 5): Observable<any[]> {
    return this.http.get<any[]>(
      `${this.API_URL}/random-images?n=${n}`
    );
  }

  predictImage(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);

    return this.http.post(
      `${this.API_URL}/predict`,
      formData
    );
  }
}