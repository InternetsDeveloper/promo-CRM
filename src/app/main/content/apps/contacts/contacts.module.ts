import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../core/modules/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { AsContactsMainSidenavComponent } from './sidenavs/main/main.component';
import { AsContactsComponent } from './contacts.component';
import { ContactsService } from './contacts.service';
import { AsContactsContactListComponent } from './contact-list/contact-list.component';
import { AsContactsSelectedBarComponent } from './selected-bar/selected-bar.component';
import { AsContactsContactFormDialogComponent } from './contact-form/contact-form.component';

const routes: Routes = [
    {
        path     : '**',
        component: AsContactsComponent,
        resolve  : {
            contacts: ContactsService
        }
    }
];

@NgModule({
    imports        : [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations   : [
        AsContactsComponent,
        AsContactsContactListComponent,
        AsContactsSelectedBarComponent,
        AsContactsMainSidenavComponent,
        AsContactsContactFormDialogComponent
    ],
    providers      : [
        ContactsService
    ],
    entryComponents: [AsContactsContactFormDialogComponent]
})
export class AsContactsModule
{
}
