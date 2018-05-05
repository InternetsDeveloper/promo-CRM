import { NgModule } from '@angular/core';
import { SharedModule } from '../../../core/modules/shared.module';
import { RouterModule } from '@angular/router';
import { AsConfigServiceDocsComponent } from './config/config.component';
import { AsSplashScreenServiceDocsComponent } from './splash-screen/splash-screen.component';

const routes = [
    {
        path     : 'config',
        component: AsConfigServiceDocsComponent
    },
    {
        path     : 'splash-screen',
        component: AsSplashScreenServiceDocsComponent
    }
];

@NgModule({
    imports     : [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        AsConfigServiceDocsComponent,
        AsSplashScreenServiceDocsComponent
    ]
})

export class AsServicesModule
{
}
