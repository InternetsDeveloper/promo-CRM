import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ColorPickerModule } from 'ngx-color-picker';
import { NgxDnDModule } from '@swimlane/ngx-dnd';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { AsMatSidenavHelperDirective, AsMatSidenavTogglerDirective } from '../directives/as-mat-sidenav-helper/as-mat-sidenav-helper.directive';
import { AsMatSidenavHelperService } from '../directives/as-mat-sidenav-helper/as-mat-sidenav-helper.service';
import { AsPipesModule } from '../pipes/pipes.module';
import { AsConfirmDialogComponent } from '../components/confirm-dialog/confirm-dialog.component';
import { AsCountdownComponent } from '../components/countdown/countdown.component';
import { AsMatchMedia } from '../services/match-media.service';
import { AsNavbarVerticalService } from '../../main/navbar/vertical/navbar-vertical.service';
import { AsHighlightComponent } from '../components/highlight/highlight.component';
import { AsPerfectScrollbarDirective } from '../directives/as-perfect-scrollbar/as-perfect-scrollbar.directive';
import { AsIfOnDomDirective } from '../directives/as-if-on-dom/as-if-on-dom.directive';
import { AsMaterialColorPickerComponent } from '../components/material-color-picker/material-color-picker.component';
import { AsTranslationLoaderService } from '../services/translation-loader.service';
import { CookieService } from 'ngx-cookie-service';
import { TranslateModule } from '@ngx-translate/core';
import { ChartsModule } from 'ng2-charts';

@NgModule({
    declarations   : [
        AsMatSidenavHelperDirective,
        AsMatSidenavTogglerDirective,
        AsConfirmDialogComponent,
        AsCountdownComponent,
        AsHighlightComponent,
        AsIfOnDomDirective,
        AsPerfectScrollbarDirective,
        AsMaterialColorPickerComponent
    ],
    imports        : [
        FlexLayoutModule,
        MaterialModule,
        CommonModule,
        FormsModule,
        AsPipesModule,
        ReactiveFormsModule,
        ColorPickerModule,
        NgxDnDModule,
        NgxDatatableModule,
        ChartsModule
    ],
    exports        : [
        FlexLayoutModule,
        MaterialModule,
        CommonModule,
        FormsModule,
        AsMatSidenavHelperDirective,
        AsMatSidenavTogglerDirective,
        AsPipesModule,
        AsCountdownComponent,
        AsHighlightComponent,
        AsPerfectScrollbarDirective,
        ReactiveFormsModule,
        ColorPickerModule,
        NgxDnDModule,
        NgxDatatableModule,
        AsIfOnDomDirective,
        AsMaterialColorPickerComponent,
        TranslateModule,
        ChartsModule
    ],
    entryComponents: [
        AsConfirmDialogComponent
    ],
    providers      : [
        CookieService,
        AsMatchMedia,
        AsNavbarVerticalService,
        AsMatSidenavHelperService,
        AsTranslationLoaderService
    ]
})

export class SharedModule
{

}
