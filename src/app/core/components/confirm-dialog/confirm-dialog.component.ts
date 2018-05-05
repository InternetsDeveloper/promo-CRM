import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
    selector   : 'as-confirm-dialog',
    templateUrl: './confirm-dialog.component.html',
    styleUrls  : ['./confirm-dialog.component.scss']
})
export class AsConfirmDialogComponent implements OnInit
{
    public confirmMessage: string;

    constructor(public dialogRef: MatDialogRef<AsConfirmDialogComponent>)
    {
    }

    ngOnInit()
    {
    }

}
