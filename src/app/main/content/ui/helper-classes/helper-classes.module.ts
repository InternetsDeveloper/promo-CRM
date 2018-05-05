import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../core/modules/shared.module';
import { RouterModule, Routes } from '@angular/router';

import { AsHelperClassesComponent } from './helper-classes.component';
import { AsHelperClassesPaddingMarginComponent } from './tabs/padding-margin/padding-margin.component';
import { AsHelperClassesWidthHeightComponent } from './tabs/width-height/width-height.component';

const routes: Routes = [
    {
        path     : 'helper-classes',
        component: AsHelperClassesComponent
    }
];

@NgModule({
    imports     : [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        AsHelperClassesComponent,
        AsHelperClassesPaddingMarginComponent,
        AsHelperClassesWidthHeightComponent
    ]
})
export class UIHelperClassesModule
{
}
