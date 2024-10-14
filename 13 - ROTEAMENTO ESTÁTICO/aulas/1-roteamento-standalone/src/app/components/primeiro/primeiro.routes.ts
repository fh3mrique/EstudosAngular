import { Routes } from "@angular/router";
import { PrimeiroComponent } from "./primeiro.component";
import { FilhoAComponent } from "./components/filho-a/filho-a.component";
import { FilhoBComponent } from "./components/filho-b/filho-b.component";

export const primeiroRoutes: Routes = [
    {
        path: '',
        component: PrimeiroComponent,
        children: [
            {
                /* ao acessar o component primeiro automaticamente o 
                filho a será renderizado */
                path: '',
                component: FilhoAComponent,
                title: 'FilhoA'
            },
            {
                path: 'filho-b',
                component: FilhoBComponent,
                title: 'FilhoB'
            },
            {
                path: 'redirect-b',
                redirectTo: 'filho-b'
            },
            {
                path: 'redirect-a',
                redirectTo: ''
            },
        ]
    }
]