import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./components/pages/home/home.component').then(
        (m) => m.HomeComponent
      ),
    data: {
      title: 'AlFaruq Moschee Gemeinde',
    },
  },

  {
    path: 'contact',
    loadComponent: () =>
      import('./components/pages/contact/contact.component').then(
        (m) => m.ContactComponent
      ),
  },
];
