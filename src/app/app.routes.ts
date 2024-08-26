import { Routes } from '@angular/router';

export const routes: Routes = [
     { path: '', redirectTo: 'home', pathMatch: 'full' },
     { path: 'home', loadChildren: () => import('@/albums/albums.routes')},
     {
        path: '**',
        loadComponent: () => import('@/core/not-found/not-found.component'),
        title: 'Not Found',
      },
];
