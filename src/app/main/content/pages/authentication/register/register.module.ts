import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../../core/modules/shared.module';
import { RouterModule } from '@angular/router';

import { AsRegisterComponent } from './register.component';

const routes = [
    {
        path     : 'auth/register',
        component: AsRegisterComponent
    }
];

@NgModule({
    declarations: [
        AsRegisterComponent
    ],
    imports     : [
        SharedModule,
        RouterModule.forChild(routes)
    ]
})

export class RegisterModule
{

}
