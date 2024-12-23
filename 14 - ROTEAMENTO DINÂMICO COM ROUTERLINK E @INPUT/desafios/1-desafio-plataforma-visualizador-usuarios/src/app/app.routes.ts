import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserContainerComponent } from './components/user-container/user-container.component';
import { TodosComponent } from './components/user-container/components/todos/todos.component';
import { AlbumsComponent } from './components/user-container/components/albums/albums.component';
import { PostsComponent } from './components/user-container/components/posts/posts.component';
import { PostComponent } from './components/user-container/components/post/post.component';

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
        component: UserContainerComponent,
        children: [
            {
                path: '',
                redirectTo: 'todos',
                pathMatch: 'full'
            },
            {
                path: 'todos',
                component: TodosComponent
            },
            {
                path: 'albums',
                component: AlbumsComponent
            },
            {
                path: 'posts',
                component: PostsComponent
            },
            {
                path: 'post/:postId',
                component: PostComponent
            }
        ]

    },
    {
        path: '**',
        title: 'Pagina não encontrada',
        component: PageNotFoundComponent
    }
];
