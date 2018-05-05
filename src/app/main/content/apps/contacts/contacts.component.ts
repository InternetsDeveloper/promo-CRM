import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ContactsService } from './contacts.service';
import { asAnimations } from '../../../../core/animations';
import { FormControl, FormGroup } from '@angular/forms';
import { AsContactsContactFormDialogComponent } from './contact-form/contact-form.component';
import { MatDialog } from '@angular/material';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector     : 'as-contacts',
    templateUrl  : './contacts.component.html',
    styleUrls    : ['./contacts.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : asAnimations
})
export class AsContactsComponent implements OnInit, OnDestroy
{
    hasSelectedContacts: boolean;
    searchInput: FormControl;
    dialogRef: any;
    onSelectedContactsChangedSubscription: Subscription;

    constructor(
        private contactsService: ContactsService,
        public dialog: MatDialog
    )
    {
        this.searchInput = new FormControl('');
    }

    newContact()
    {
        this.dialogRef = this.dialog.open(AsContactsContactFormDialogComponent, {
            panelClass: 'contact-form-dialog',
            data      : {
                action: 'new'
            }
        });

        this.dialogRef.afterClosed()
            .subscribe((response: FormGroup) => {
                if ( !response )
                {
                    return;
                }

                this.contactsService.updateContact(response.getRawValue());

            });

    }

    ngOnInit()
    {
        this.onSelectedContactsChangedSubscription =
            this.contactsService.onSelectedContactsChanged
                .subscribe(selectedContacts => {
                    this.hasSelectedContacts = selectedContacts.length > 0;
                });

        this.searchInput.valueChanges
            .debounceTime(300)
            .distinctUntilChanged()
            .subscribe(searchText => {
                this.contactsService.onSearchTextChanged.next(searchText);
            });
    }

    ngOnDestroy()
    {
        this.onSelectedContactsChangedSubscription.unsubscribe();
    }
}
