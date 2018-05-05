import { Component, OnInit } from '@angular/core';
import { FileManagerService } from '../../file-manager.service';
import { asAnimations } from '../../../../../../core/animations';

@Component({
    selector   : 'as-file-manager-details-sidenav',
    templateUrl: './details.component.html',
    styleUrls  : ['./details.component.scss'],
    animations : asAnimations
})
export class AsFileManagerDetailsSidenavComponent implements OnInit
{

    selected: any;

    constructor(private fileManagerService: FileManagerService)
    {

    }

    ngOnInit()
    {
        this.fileManagerService.onFileSelected.subscribe(selected => {
            this.selected = selected;
        });
    }

}
