import { NgModule } from '@angular/core';
import { SharedModule } from '../../modules/shared.module';
import { AsWidgetComponent } from './widget.component';
import { AsWidgetToggleDirective } from './widget-toggle.directive';

@NgModule({
    imports     : [
        SharedModule
    ],
    exports     : [
        AsWidgetComponent,
        AsWidgetToggleDirective
    ],
    declarations: [
        AsWidgetComponent,
        AsWidgetToggleDirective
    ]
})
export class AsWidgetModule
{
}
