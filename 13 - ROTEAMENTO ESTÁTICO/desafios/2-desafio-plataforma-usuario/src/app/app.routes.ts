import { Routes } from '@angular/router';
import { InitialComponent } from './components/initial/initial.component';
import { GeneralComponent } from './components/general/general.component';
import { BasicComponent } from './components/general/components/basic/basic.component';
import { ContactComponent } from './components/general/components/contact/contact.component';
import { AddressComponent } from './components/general/components/address/address.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { CreditComponent } from './components/transactions/components/credit/credit.component';
import { DebitComponent } from './components/transactions/components/debit/debit.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

export const routes: Routes = [
    {
        path: '',
        component: InitialComponent
    },
    {
        path: 'general',
        title: 'Geral',
        loadChildren: () => import('./components/general/general.routes').then(m => m.GeneralRoutes),    
    },

    {
        path: 'transactions',
        title: 'Transações',
        component: TransactionsComponent,
        children: [
            {
                path: '',
                redirectTo: 'credit',
                pathMatch: 'full'
            },
            {
                path: 'credit',
                title: 'Credito',
                component: CreditComponent
            },
            {
                path: 'debit',
                title: 'Debito',
                component: DebitComponent
            },
        ]
    },
    {
        path: '**',
        title: 'Pagina não encontrada',
        component: NotfoundComponent
    }
];
