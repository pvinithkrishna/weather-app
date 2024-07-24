import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from '../weather.service';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-weathercitydetails',
  standalone: true,
  imports: [TableModule],
  templateUrl: './weathercitydetails.component.html',
  styleUrl: './weathercitydetails.component.css',
})
export class WeathercitydetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  weatherService = inject(WeatherService);
  weatherLocation: any = undefined;
  weatherLocationId = -1;

  constructor() {
    this.weatherLocationId = Number(this.route.snapshot.params['id']);
    this.weatherLocation = this.weatherService
      .getWeatherStatus(this.weatherLocationId)
      .subscribe({
        next: (data) => {
          this.weatherLocation = data;
        },
        error: (err) => {
          console.log(err);
        },
      });
  }
}
