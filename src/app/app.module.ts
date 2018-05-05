import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import 'hammerjs';
import { SharedModule } from './core/modules/shared.module';
import { AppComponent } from './app.component';
import { AsFakeDbService } from './as-fake-db/as-fake-db.service';
import { AsMainModule } from './main/main.module';
import { AsSplashScreenService } from './core/services/splash-screen.service';
import { AsConfigService } from './core/services/config.service';
import { AsNavigationService } from './core/components/navigation/navigation.service';
import { TranslateModule } from '@ngx-translate/core';
import { AppStoreModule } from './store/store.module';

const appRoutes: Routes = [
    {
        path        : 'apps',
        loadChildren: './main/content/apps/apps.module#AsAppsModule'
    },
    {
        path        : 'pages',
        loadChildren: './main/content/pages/pages.module#AsPagesModule'
    },
    {
        path        : 'ui',
        loadChildren: './main/content/ui/ui.module#AsUIModule'
    },
    {
        path        : 'services',
        loadChildren: './main/content/services/services.module#AsServicesModule'
    },
    {
        path        : 'components',
        loadChildren: './main/content/components/components.module#AsComponentsModule'
    },
    {
        path        : 'components-third-party',
        loadChildren: './main/content/components-third-party/components-third-party.module#AsComponentsThirdPartyModule'
    },
    {
        path      : '**',
        redirectTo: 'apps/dashboards/project'
    }
];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports     : [
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(appRoutes),
        SharedModule,
        TranslateModule.forRoot(),
        InMemoryWebApiModule.forRoot(AsFakeDbService, {
            delay             : 0,
            passThruUnknownUrl: true
        }),
        AppStoreModule,
        AsMainModule
    ],
    providers   : [
        AsSplashScreenService,
        AsConfigService,
        AsNavigationService
    ],
    bootstrap   : [
        AppComponent
    ]
})
export class AppModule
{
}
