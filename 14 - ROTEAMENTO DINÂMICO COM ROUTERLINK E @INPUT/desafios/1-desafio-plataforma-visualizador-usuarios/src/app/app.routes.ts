import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserContainerComponent } from './components/user-container/user-container.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/users-list',
        pathMatch: 'full'
    },
    {
        path: 'users-list',
        title: 'Lista de usuarios',
        component: UsersListComponent
    },
    {
        path: 'user/:userId',
        title: 'Area do usuario',
        component: UserContainerComponent
    },
    {
        path: '**',
        title: 'Pagina não encontrada',
        component: PageNotFoundComponent
    }
];
