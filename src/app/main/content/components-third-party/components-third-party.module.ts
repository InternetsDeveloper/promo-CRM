import { NgModule } from '@angular/core';
import { SharedModule } from '../../../core/modules/shared.module';
import { RouterModule } from '@angular/router';
import { AsNgxDatatableComponent } from './datatable/ngx-datatable.component';
import { GoogleMapsModule } from './google-maps/google-maps.module';

const routes = [
    {
        path     : 'datatables/ngx-datatable',
        component: AsNgxDatatableComponent
    }
];

@NgModule({
    imports     : [
        SharedModule,
        RouterModule.forChild(routes),
        GoogleMapsModule
    ],
    declarations: [
        AsNgxDatatableComponent
    ]
})
export class AsComponentsThirdPartyModule
{
}
