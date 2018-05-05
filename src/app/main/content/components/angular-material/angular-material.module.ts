import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../../../core/modules/shared.module';
import { AsWidgetModule } from '../../../../core/components/widget/widget.module';
import { AsExampleViewerComponent } from './example-viewer/example-viewer';
import { EXAMPLE_LIST } from './example-components';
import { AsAngularMaterialComponent } from './angular-material.component';

const routes: Routes = [
    {
        path    : 'angular-material',
        children: [
            {
                path     : ':id',
                component: AsAngularMaterialComponent
            }
        ]
    }
];

@NgModule({
    imports        : [
        SharedModule,
        RouterModule.forChild(routes),
        AsWidgetModule
    ],
    exports        : [
        SharedModule
    ],
    entryComponents: EXAMPLE_LIST,
    declarations   : [
        [...EXAMPLE_LIST],
        AsAngularMaterialComponent,
        AsExampleViewerComponent
    ]
})
export class AsAngularMaterialModule
{
}

