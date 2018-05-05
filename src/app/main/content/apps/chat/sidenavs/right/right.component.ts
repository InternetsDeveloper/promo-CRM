import { Component, OnInit } from '@angular/core';
import { asAnimations } from '../../../../../../core/animations';
import { ChatService } from '../../chat.service';

@Component({
    selector   : 'as-chat-right-sidenav',
    templateUrl: './right.component.html',
    styleUrls  : ['./right.component.scss'],
    animations : asAnimations
})
export class AsChatRightSidenavComponent implements OnInit
{
    view: string;

    constructor(private chatService: ChatService)
    {
        this.view = 'contact';
    }

    ngOnInit()
    {
        this.chatService.onRightSidenavViewChanged.subscribe(view => {
            this.view = view;
        });
    }

}
