import { Routes } from "@angular/router";
import { TransactionsComponent } from "./transactions.component";
import { CreditComponent } from "./components/credit/credit.component";
import { DebitComponent } from "./components/debit/debit.component";

export const TransactionsRoutes: Routes = [
    {
        path: '',
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
    }
]