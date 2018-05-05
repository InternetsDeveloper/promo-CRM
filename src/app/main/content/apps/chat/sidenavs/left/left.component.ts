import { Component, OnInit } from '@angular/core';
import { asAnimations } from '../../../../../../core/animations';
import { ChatService } from '../../chat.service';

@Component({
    selector   : 'as-chat-left-sidenav',
    templateUrl: './left.component.html',
    styleUrls  : ['./left.component.scss'],
    animations : asAnimations
})
export class AsChatLeftSidenavComponent implements OnInit
{
    view: string;

    constructor(private chatService: ChatService)
    {
        this.view = 'chats';
    }

    ngOnInit()
    {
        this.chatService.onLeftSidenavViewChanged.subscribe(view => {
            this.view = view;
        });
    }

}
