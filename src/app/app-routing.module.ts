import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  NotFoundComponent,
  UnderConstructionComponent
} from './shared';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home',
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home').then(m => m.HomeModule),
    data: {
      animation: 'Home',
    },
  },
  {
    path: 'about',
    component: UnderConstructionComponent,
    data: {
      animation: 'About',
    },
  },
  {
    path: '**',
    component: NotFoundComponent,
    data: {
      animation: 'NotFound',
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
