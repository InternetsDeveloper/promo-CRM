import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../../core/modules/shared.module';
import { RouterModule } from '@angular/router';

import { AsForgotPasswordComponent } from './forgot-password.component';

const routes = [
    {
        path     : 'auth/forgot-password',
        component: AsForgotPasswordComponent
    }
];

@NgModule({
    declarations: [
        AsForgotPasswordComponent
    ],
    imports     : [
        SharedModule,
        RouterModule.forChild(routes)
    ]
})

export class ForgotPasswordModule
{

}
