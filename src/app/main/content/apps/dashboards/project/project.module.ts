import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../../../../core/modules/shared.module';

import { AsProjectDashboardComponent } from './project.component';
import { ProjectDashboardService } from './project.service';
import { AsWidgetModule } from '../../../../../core/components/widget/widget.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';

const routes: Routes = [
    {
        path     : '**',
        component: AsProjectDashboardComponent,
        resolve  : {
            data: ProjectDashboardService
        }
    }
];

@NgModule({
    imports     : [
        SharedModule,
        RouterModule.forChild(routes),
        AsWidgetModule,
        NgxChartsModule
    ],
    declarations: [
        AsProjectDashboardComponent
    ],
    providers   : [
        ProjectDashboardService
    ]
})
export class AsProjectDashboardModule
{
}

