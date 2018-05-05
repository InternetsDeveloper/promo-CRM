import { NgModule } from '@angular/core';
import { SharedModule } from '../../modules/shared.module';
import { RouterModule } from '@angular/router';
import { AsDemoContentComponent } from './demo-content/demo-content.component';
import { AsDemoSidenavComponent } from './demo-sidenav/demo-sidenav.component';

@NgModule({
    declarations: [
        AsDemoContentComponent,
        AsDemoSidenavComponent
    ],
    imports     : [
        SharedModule,
        RouterModule
    ],
    exports     : [
        AsDemoContentComponent,
        AsDemoSidenavComponent
    ]
})
export class AsDemoModule
{
}
