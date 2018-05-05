import { Component, OnInit } from '@angular/core';
import { asAnimations } from '../../../../../core/animations';

@Component({
    selector   : 'as-chat-start',
    templateUrl: './chat-start.component.html',
    styleUrls  : ['./chat-start.component.scss'],
    animations : asAnimations
})
export class AsChatStartComponent implements OnInit
{

    constructor()
    {
    }

    ngOnInit()
    {
    }

}
