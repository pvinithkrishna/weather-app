import { Routes } from '@angular/router';

import { ContentComponent } from './content/content.component';
import { WeathercitydetailsComponent } from './weathercitydetails/weathercitydetails.component';

export const routes: Routes = [
  { path: '', component: ContentComponent, title: 'Weather Page' },
  {
    path: 'details/:id',
    component: WeathercitydetailsComponent,
    title: 'Weather details',
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
