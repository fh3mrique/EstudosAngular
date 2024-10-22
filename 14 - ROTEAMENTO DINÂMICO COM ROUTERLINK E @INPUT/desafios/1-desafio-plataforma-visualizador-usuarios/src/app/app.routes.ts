import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const routes: Routes = [
    {
        path: '**',
        title: 'Pagina não encontrada',
        component: PageNotFoundComponent
    }
];
