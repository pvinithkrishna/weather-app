import { Component, inject } from '@angular/core';
import { CardModule } from 'primeng/card';
import { WeatherService } from '../weather.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-citycard',
  standalone: true,
  imports: [CardModule, CommonModule, RouterModule],
  templateUrl: './citycard.component.html',
  styleUrl: './citycard.component.css',
})
export class CitycardComponent {
  weatherService = inject(WeatherService);

  allWeathers: any[] = [];

  constructor() {
    this.weatherService.getAllWeatherStatus().subscribe({
      next: (data) => {
        this.allWeathers = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
