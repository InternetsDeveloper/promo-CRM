import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../../../core/modules/shared.module';
import { AsDemoModule } from '../../../../core/components/demo/demo.module';
import { AsCardedFullWidthComponent } from './carded/fullwidth/fullwidth.component';
import { AsCardedFullWidth2Component } from './carded/fullwidth-2/fullwidth-2.component';
import { AsCardedLeftSidenavComponent } from './carded/left-sidenav/left-sidenav.component';
import { AsCardedLeftSidenavTabbedComponent } from './carded/left-sidenav-tabbed/left-sidenav-tabbed.component';
import { AsCardedLeftSidenav2Component } from './carded/left-sidenav-2/left-sidenav-2.component';
import { AsCardedLeftSidenav2TabbedComponent } from './carded/left-sidenav-2-tabbed/left-sidenav-2-tabbed.component';
import { AsCardedRightSidenavComponent } from './carded/right-sidenav/right-sidenav.component';
import { AsCardedRightSidenavTabbedComponent } from './carded/right-sidenav-tabbed/right-sidenav-tabbed.component';
import { AsCardedRightSidenav2Component } from './carded/right-sidenav-2/right-sidenav-2.component';
import { AsCardedRightSidenav2TabbedComponent } from './carded/right-sidenav-2-tabbed/right-sidenav-2-tabbed.component';
import { AsSimpleFullWidthComponent } from './simple/fullwidth/fullwidth.component';
import { AsSimpleLeftSidenavComponent } from './simple/left-sidenav/left-sidenav.component';
import { AsSimpleLeftSidenav2Component } from './simple/left-sidenav-2/left-sidenav-2.component';
import { AsSimpleLeftSidenav3Component } from './simple/left-sidenav-3/left-sidenav-3.component';
import { AsSimpleRightSidenavComponent } from './simple/right-sidenav/right-sidenav.component';
import { AsSimpleRightSidenav2Component } from './simple/right-sidenav-2/right-sidenav-2.component';
import { AsSimpleRightSidenav3Component } from './simple/right-sidenav-3/right-sidenav-3.component';
import { AsTabbedComponent } from './simple/tabbed/tabbed.component';
import { AsBlankComponent } from './blank/blank.component';

const routes: Routes = [
    {
        path     : 'page-layouts/carded/full-width',
        component: AsCardedFullWidthComponent
    },
    {
        path     : 'page-layouts/carded/full-width-2',
        component: AsCardedFullWidth2Component
    },
    {
        path     : 'page-layouts/carded/left-sidenav',
        component: AsCardedLeftSidenavComponent
    },
    {
        path     : 'page-layouts/carded/left-sidenav-tabbed',
        component: AsCardedLeftSidenavTabbedComponent
    },
    {
        path     : 'page-layouts/carded/left-sidenav-2',
        component: AsCardedLeftSidenav2Component
    },
    {
        path     : 'page-layouts/carded/left-sidenav-2-tabbed',
        component: AsCardedLeftSidenav2TabbedComponent
    },
    {
        path     : 'page-layouts/carded/right-sidenav',
        component: AsCardedRightSidenavComponent
    },
    {
        path     : 'page-layouts/carded/right-sidenav-tabbed',
        component: AsCardedRightSidenavTabbedComponent
    },
    {
        path     : 'page-layouts/carded/right-sidenav-2',
        component: AsCardedRightSidenav2Component
    },
    {
        path     : 'page-layouts/carded/right-sidenav-2-tabbed',
        component: AsCardedRightSidenav2TabbedComponent
    },
    {
        path     : 'page-layouts/simple/full-width',
        component: AsSimpleFullWidthComponent
    },
    {
        path     : 'page-layouts/simple/left-sidenav',
        component: AsSimpleLeftSidenavComponent
    },
    {
        path     : 'page-layouts/simple/left-sidenav-2',
        component: AsSimpleLeftSidenav2Component
    },
    {
        path     : 'page-layouts/simple/left-sidenav-3',
        component: AsSimpleLeftSidenav3Component
    },
    {
        path     : 'page-layouts/simple/right-sidenav',
        component: AsSimpleRightSidenavComponent
    },
    {
        path     : 'page-layouts/simple/right-sidenav-2',
        component: AsSimpleRightSidenav2Component
    },
    {
        path     : 'page-layouts/simple/right-sidenav-3',
        component: AsSimpleRightSidenav3Component
    },
    {
        path     : 'page-layouts/simple/tabbed',
        component: AsTabbedComponent
    },
    {
        path     : 'page-layouts/blank',
        component: AsBlankComponent
    }
];

@NgModule({
    imports     : [
        SharedModule,
        RouterModule.forChild(routes),
        AsDemoModule
    ],
    declarations: [
        AsCardedFullWidthComponent,
        AsCardedFullWidth2Component,
        AsCardedLeftSidenavComponent,
        AsCardedLeftSidenavTabbedComponent,
        AsCardedLeftSidenav2Component,
        AsCardedLeftSidenav2TabbedComponent,
        AsCardedRightSidenavComponent,
        AsCardedRightSidenavTabbedComponent,
        AsCardedRightSidenav2Component,
        AsCardedRightSidenav2TabbedComponent,
        AsSimpleFullWidthComponent,
        AsSimpleLeftSidenavComponent,
        AsSimpleLeftSidenav2Component,
        AsSimpleLeftSidenav3Component,
        AsSimpleRightSidenavComponent,
        AsSimpleRightSidenav2Component,
        AsSimpleRightSidenav3Component,
        AsTabbedComponent,
        AsBlankComponent
    ]
})
export class UIPageLayoutsModule
{
}
