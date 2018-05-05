import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../core/modules/shared.module';

import { AsMainComponent } from './main.component';
import { AsContentComponent } from './content/content.component';
import { AsFooterComponent } from './footer/footer.component';
import { AsNavbarVerticalComponent } from './navbar/vertical/navbar-vertical.component';
import { AsToolbarComponent } from './toolbar/toolbar.component';
import { AsNavigationModule } from '../core/components/navigation/navigation.module';
import { AsNavbarVerticalToggleDirective } from './navbar/vertical/navbar-vertical-toggle.directive';
import { AsNavbarHorizontalComponent } from './navbar/horizontal/navbar-horizontal.component';
import { AsQuickPanelComponent } from './quick-panel/quick-panel.component';
import { AsThemeOptionsComponent } from '../core/components/theme-options/theme-options.component';
import { AsShortcutsModule } from '../core/components/shortcuts/shortcuts.module';
import { AsSearchBarModule } from '../core/components/search-bar/search-bar.module';

@NgModule({
    declarations: [
        AsContentComponent,
        AsFooterComponent,
        AsMainComponent,
        AsNavbarVerticalComponent,
        AsNavbarHorizontalComponent,
        AsToolbarComponent,
        AsNavbarVerticalToggleDirective,
        AsThemeOptionsComponent,
        AsQuickPanelComponent
    ],
    imports     : [
        SharedModule,
        RouterModule,
        AsNavigationModule,
        AsShortcutsModule,
        AsSearchBarModule
    ],
    exports     : [
        AsMainComponent
    ]
})

export class AsMainModule
{
}
