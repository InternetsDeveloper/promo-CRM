import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../core/modules/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { AsMailComponent } from './mail.component';
import { AsMailMainSidenavComponent } from './sidenavs/main/main-sidenav.component';
import { AsMailListItemComponent } from './mail-list/mail-list-item/mail-list-item.component';
import { AsMailListComponent } from './mail-list/mail-list.component';
import { AsMailDetailsComponent } from './mail-details/mail-details.component';
import { MailService } from './mail.service';
import { AsMailComposeDialogComponent } from './dialogs/compose/compose.component';

const routes: Routes = [
    {
        path     : 'label/:labelHandle',
        component: AsMailComponent,
        resolve  : {
            mail: MailService
        }
    },
    {
        path     : 'label/:labelHandle/:mailId',
        component: AsMailComponent,
        resolve  : {
            mail: MailService
        }
    },
    {
        path     : 'filter/:filterHandle',
        component: AsMailComponent,
        resolve  : {
            mail: MailService
        }
    },
    {
        path     : 'filter/:filterHandle/:mailId',
        component: AsMailComponent,
        resolve  : {
            mail: MailService
        }
    },
    {
        path     : ':folderHandle',
        component: AsMailComponent,
        resolve  : {
            mail: MailService
        }
    },
    {
        path     : ':folderHandle/:mailId',
        component: AsMailComponent,
        resolve  : {
            mail: MailService
        }
    },
    {
        path      : '**',
        redirectTo: 'inbox'
    }
];

@NgModule({
    declarations   : [
        AsMailComponent,
        AsMailListComponent,
        AsMailListItemComponent,
        AsMailDetailsComponent,
        AsMailMainSidenavComponent,
        AsMailComposeDialogComponent
    ],
    imports        : [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    providers      : [
        MailService
    ],
    entryComponents: [AsMailComposeDialogComponent]
})
export class AsMailModule
{
}
