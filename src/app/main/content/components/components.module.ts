import { NgModule } from '@angular/core';
import { SharedModule } from '../../../core/modules/shared.module';
import { RouterModule } from '@angular/router';
import { AsCardsDocsComponent } from './cards/cards.component';
import { AsCountdownDocsComponent } from './countdown/countdown.component';
import { AsHighlightDocsComponent } from './highlight/highlight.component';
import { AsMaterialColorPickerDocsComponent } from './material-color-picker/material-color-picker.component';
import { AsMultiLanguageDocsComponent } from './multi-language/multi-language.component';
import { AsNavigationDocsComponent } from './navigation/navigation.component';
import { AsSearchBarDocsComponent } from './search-bar/search-bar.component';
import { AsShortcutsDocsComponent } from './shortcuts/shortcuts.component';
import { AsWidgetDocsComponent } from './widget/widget.component';
import { AsWidgetModule } from '../../../core/components/widget/widget.module';
import { AsAngularMaterialModule } from './angular-material/angular-material.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';

const routes = [
    {
        path     : 'cards',
        component: AsCardsDocsComponent
    },
    {
        path     : 'countdown',
        component: AsCountdownDocsComponent
    },
    {
        path     : 'highlight',
        component: AsHighlightDocsComponent
    },
    {
        path     : 'material-color-picker',
        component: AsMaterialColorPickerDocsComponent
    },
    {
        path     : 'multi-language',
        component: AsMultiLanguageDocsComponent
    },
    {
        path     : 'navigation',
        component: AsNavigationDocsComponent
    },
    {
        path     : 'search-bar',
        component: AsSearchBarDocsComponent
    },
    {
        path     : 'shortcuts',
        component: AsShortcutsDocsComponent
    },
    {
        path     : 'widget',
        component: AsWidgetDocsComponent
    }
];

@NgModule({
    imports     : [
        SharedModule,
        RouterModule.forChild(routes),
        AsWidgetModule,
        AsAngularMaterialModule,
        NgxChartsModule
    ],
    declarations: [
        AsCardsDocsComponent,
        AsCountdownDocsComponent,
        AsHighlightDocsComponent,
        AsMaterialColorPickerDocsComponent,
        AsMultiLanguageDocsComponent,
        AsNavigationDocsComponent,
        AsSearchBarDocsComponent,
        AsShortcutsDocsComponent,
        AsWidgetDocsComponent
    ]
})
export class AsComponentsModule
{
}
