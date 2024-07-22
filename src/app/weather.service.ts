import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiUrl = 'https://freetestapi.com/api/v1/weathers';

  http = inject(HttpClient);

  getAllWeatherStatus(): Observable<any> {
    return this.http.get<any>(this.apiUrl, { responseType: 'json' });
  }

  getWeatherStatus(id: number) {
    this.http.get(this.apiUrl + '/' + id);
  }
  constructor() {}
}
