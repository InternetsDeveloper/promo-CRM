import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../core/modules/shared.module';
import { RouterModule } from '@angular/router';

import { AsMaintenanceComponent } from './maintenance.component';

const routes = [
    {
        path     : 'maintenance',
        component: AsMaintenanceComponent
    }
];

@NgModule({
    declarations: [
        AsMaintenanceComponent
    ],
    imports     : [
        SharedModule,
        RouterModule.forChild(routes)
    ]
})

export class MaintenanceModule
{

}
