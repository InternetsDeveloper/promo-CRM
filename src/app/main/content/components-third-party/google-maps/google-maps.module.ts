import { NgModule } from '@angular/core';
import { AsGoogleMapsDocsComponent } from './google-maps.component';
import { SharedModule } from '../../../../core/modules/shared.module';
import { RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';

const routes = [
    {
        path     : 'google-maps',
        component: AsGoogleMapsDocsComponent
    }
];

@NgModule({
    imports     : [
        SharedModule,
        RouterModule.forChild(routes),
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyD81ecsCj4yYpcXSLFcYU97PvRsE_X8Bx8'
        })
    ],
    declarations: [
        AsGoogleMapsDocsComponent
    ]
})
export class GoogleMapsModule
{
}
