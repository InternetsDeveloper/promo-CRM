import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../modules/shared.module';
import { AsSearchBarComponent } from './search-bar.component';

@NgModule({
    declarations: [
        AsSearchBarComponent
    ],
    imports     : [
        SharedModule,
        RouterModule
    ],
    exports     : [
        AsSearchBarComponent
    ]
})
export class AsSearchBarModule
{
}
