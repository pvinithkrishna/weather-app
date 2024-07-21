import { Component } from '@angular/core';
import { ContexttitleComponent } from '../contexttitle/contexttitle.component';
import { CitycardComponent } from '../citycard/citycard.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [ContexttitleComponent, CitycardComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
})
export class ContentComponent {}
