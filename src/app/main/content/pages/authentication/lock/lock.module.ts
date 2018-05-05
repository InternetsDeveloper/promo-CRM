import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../../core/modules/shared.module';
import { RouterModule } from '@angular/router';

import { AsLockComponent } from './lock.component';

const routes = [
    {
        path     : 'auth/lock',
        component: AsLockComponent
    }
];

@NgModule({
    declarations: [
        AsLockComponent
    ],
    imports     : [
        SharedModule,
        RouterModule.forChild(routes)
    ]
})

export class LockModule
{

}
