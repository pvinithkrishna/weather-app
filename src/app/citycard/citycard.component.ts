import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-citycard',
  standalone: true,
  imports: [CardModule],
  templateUrl: './citycard.component.html',
  styleUrl: './citycard.component.css',
})
export class CitycardComponent {}
