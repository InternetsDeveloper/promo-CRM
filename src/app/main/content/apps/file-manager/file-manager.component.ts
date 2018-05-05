import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FileManagerService } from './file-manager.service';
import { asAnimations } from '../../../../core/animations';

@Component({
    selector     : 'as-file-manager',
    templateUrl  : './file-manager.component.html',
    styleUrls    : ['./file-manager.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : asAnimations
})
export class AsFileManagerComponent implements OnInit
{

    selected: any;
    pathArr: string[];

    constructor(private fileManagerService: FileManagerService)
    {
    }

    ngOnInit()
    {
        this.fileManagerService.onFileSelected.subscribe(selected => {
            this.selected = selected;
            this.pathArr = selected.location.split('>');
        });
    }

}
