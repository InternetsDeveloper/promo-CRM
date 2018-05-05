import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../../../core/modules/shared.module';
import { AsDemoModule } from '../../../../core/components/demo/demo.module';
import { AsColorsComponent } from './colors.component';

const routes: Routes = [
    {
        path     : 'colors',
        component: AsColorsComponent
    }
];

@NgModule({
    imports     : [
        SharedModule,
        RouterModule.forChild(routes),
        AsDemoModule
    ],
    declarations: [
        AsColorsComponent
    ]
})
export class UIColorsModule
{
}
