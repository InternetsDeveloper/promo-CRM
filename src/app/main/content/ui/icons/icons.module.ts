import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../core/modules/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { AsIconsComponent } from './icons.component';

const routes: Routes = [
    {
        path     : 'icons',
        component: AsIconsComponent
    }
];

@NgModule({
    imports     : [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        AsIconsComponent
    ]
})
export class UIIconsModule
{
}
