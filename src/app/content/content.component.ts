import { Component } from '@angular/core';
import { ContexttitleComponent } from '../contexttitle/contexttitle.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [ContexttitleComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
})
export class ContentComponent {}
