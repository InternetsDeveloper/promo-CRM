import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { asAnimations } from '../../../../core/animations';

@Component({
    selector     : 'as-profile',
    templateUrl  : './profile.component.html',
    styleUrls    : ['./profile.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : asAnimations
})
export class AsProfileComponent implements OnInit
{

    constructor()
    {

    }

    ngOnInit()
    {

    }
}
