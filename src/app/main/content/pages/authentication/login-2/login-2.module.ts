import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../../core/modules/shared.module';
import { RouterModule } from '@angular/router';

import { AsLogin2Component } from './login-2.component';

const routes = [
    {
        path     : 'auth/login-2',
        component: AsLogin2Component
    }
];

@NgModule({
    declarations: [
        AsLogin2Component
    ],
    imports     : [
        SharedModule,
        RouterModule.forChild(routes)
    ]
})

export class Login2Module
{

}
