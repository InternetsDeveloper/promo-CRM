import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../core/modules/shared.module';
import { RouterModule, Routes } from '@angular/router';

import { AsFormsComponent } from './forms.component';

const routes: Routes = [
    {
        path     : 'forms',
        component: AsFormsComponent
    }
];

@NgModule({
    imports     : [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        AsFormsComponent
    ]
})
export class UIFormsModule
{
}
