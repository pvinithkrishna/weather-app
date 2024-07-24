import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiUrl = 'https://freetestapi.com/api/v1/weathers';

  http = inject(HttpClient);

  getAllWeatherStatus(): Observable<any> {
    return this.http
      .get(this.apiUrl, { responseType: 'json' })
      .pipe(catchError(this.handleError));
  }

  private handleError(error: any) {
    console.log(error);
    return throwError(() => new Error('Something went wrong'));
  }

  getWeatherStatus(id: number): Observable<any> {
    return this.http.get(this.apiUrl + '/' + id);
  }
  constructor() {}
}
