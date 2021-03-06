import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
    selector   : 'as-nav-vertical-item',
    templateUrl: './nav-vertical-item.component.html',
    styleUrls  : ['./nav-vertical-item.component.scss']
})
export class AsNavVerticalItemComponent implements OnInit
{
    @HostBinding('class') classes = 'nav-item';
    @Input() item: any;

    constructor()
    {
    }

    ngOnInit()
    {
    }
}
