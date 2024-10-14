import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'informations',
        loadComponent: () => import('./components/informations/informations.component').then(m => m.InformationsComponent)
    },
    {
        path: 'contacts',
        loadComponent: () => import('./components/contacts/contacts.component').then(m => m.ContactsComponent)
    },
    {
        path: 'about',
        loadComponent: () => import('./components/about/about.component').then(m => m.AboutComponent)
    },
    {
        path: 'exit',
        loadComponent: () => import('./components/exit/exit.component').then(m => m.ExitComponent)
    }
];
