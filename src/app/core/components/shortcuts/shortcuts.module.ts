import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AsShortcutsComponent } from './shortcuts.component';
import { SharedModule } from '../../modules/shared.module';

@NgModule({
    declarations: [
        AsShortcutsComponent
    ],
    imports     : [
        SharedModule,
        RouterModule
    ],
    exports     : [
        AsShortcutsComponent
    ]
})
export class AsShortcutsModule
{
}
