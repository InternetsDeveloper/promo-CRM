import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../../core/modules/shared.module';
import { RouterModule } from '@angular/router';

import { AsError404Component } from './error-404.component';

const routes = [
    {
        path     : 'errors/error-404',
        component: AsError404Component
    }
];

@NgModule({
    declarations: [
        AsError404Component
    ],
    imports     : [
        SharedModule,
        RouterModule.forChild(routes)
    ]
})

export class Error404Module
{

}
