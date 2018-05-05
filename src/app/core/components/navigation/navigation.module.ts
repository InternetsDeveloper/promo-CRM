import { NgModule } from '@angular/core';
import { SharedModule } from '../../modules/shared.module';
import { RouterModule } from '@angular/router';
import { AsNavigationComponent } from './navigation.component';
import { AsNavVerticalItemComponent } from './vertical/nav-item/nav-vertical-item.component';
import { AsNavVerticalCollapseComponent } from './vertical/nav-collapse/nav-vertical-collapse.component';
import { AsNavVerticalGroupComponent } from './vertical/nav-group/nav-vertical-group.component';
import { AsNavHorizontalItemComponent } from './horizontal/nav-item/nav-horizontal-item.component';
import { AsNavHorizontalCollapseComponent } from './horizontal/nav-collapse/nav-horizontal-collapse.component';

@NgModule({
    imports     : [
        SharedModule,
        RouterModule
    ],
    exports     : [
        AsNavigationComponent
    ],
    declarations: [
        AsNavigationComponent,
        AsNavVerticalGroupComponent,
        AsNavVerticalItemComponent,
        AsNavVerticalCollapseComponent,
        AsNavHorizontalItemComponent,
        AsNavHorizontalCollapseComponent
    ]
})
export class AsNavigationModule
{
}
