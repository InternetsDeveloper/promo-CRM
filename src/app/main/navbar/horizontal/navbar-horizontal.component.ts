import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { AsMainComponent } from '../../main.component';

@Component({
    selector     : 'as-navbar-horizontal',
    templateUrl  : './navbar-horizontal.component.html',
    styleUrls    : ['./navbar-horizontal.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AsNavbarHorizontalComponent implements OnInit, OnDestroy
{
    constructor(private asMainComponent: AsMainComponent)
    {
    }

    ngOnInit()
    {
        this.asMainComponent.addClass('as-nav-bar-horizontal');
    }

    ngOnDestroy()
    {
        this.asMainComponent.removeClass('as-nav-bar-horizontal');
    }
}
