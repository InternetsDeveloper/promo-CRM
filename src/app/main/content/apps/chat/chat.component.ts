import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ChatService } from './chat.service';
import { asAnimations } from '../../../../core/animations';

@Component({
    selector     : 'as-chat',
    templateUrl  : './chat.component.html',
    styleUrls    : ['./chat.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : asAnimations
})
export class AsChatComponent implements OnInit
{
    selectedChat: any;

    constructor(private chatService: ChatService)
    {
    }

    ngOnInit()
    {
        this.chatService.onChatSelected
            .subscribe(chatData => {
                this.selectedChat = chatData;
            });
    }

}
