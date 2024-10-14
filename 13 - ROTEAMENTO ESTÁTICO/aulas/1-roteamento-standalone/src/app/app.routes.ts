import { Routes } from '@angular/router';
import { PrimeiroComponent } from './components/primeiro/primeiro.component';
import { SegundoComponent } from './components/segundo/segundo.component';
import { BaseComponent } from './components/base/base.component';
import { InicialComponent } from './components/inicial/inicial.component';
import { PaginaNaoEncontradaComponent } from './components/pagina-nao-encontrada/pagina-nao-encontrada.component';
import { FilhoAComponent } from './components/primeiro/components/filho-a/filho-a.component';
import { FilhoBComponent } from './components/primeiro/components/filho-b/filho-b.component';

/* export const routes: Routes = [
    {path: 'primeiro', component: PrimeiroComponent},
    {path: 'segundo', component: SegundoComponent},
]; */

/* export const routes: Routes = [
    {path: 'componentes', component: BaseComponent},
    {path: 'componentes/primeiro', component: PrimeiroComponent},
    {path: 'componentes/segundo', component: SegundoComponent},
]; */
export const routes: Routes = [
    {
        path: '',
        title: 'Inicial',
        component: InicialComponent,
    },
    {
        path: 'componentes',
        loadComponent: () => import('./components/base/base.component').then(m => m.BaseComponent)
    },
    {
        path: 'componentes/primeiro',
        component: PrimeiroComponent,
        children: [
            {
                path: 'filho-a',
                component: FilhoAComponent,
                title: 'FilhoA'
            },
            {
                path: 'filho-b',
                component: FilhoBComponent,
                title: 'FilhoB'
            }
        ]
    },
    {
        path: 'componentes/segundo',
        loadComponent: () => import('./components/segundo/segundo.component').then(m => m.SegundoComponent)
    },
    /* deve ser aultima rota */
    {
        path: '**',
        component: PaginaNaoEncontradaComponent
    }
];


