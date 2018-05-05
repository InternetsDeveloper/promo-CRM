import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../../chat.service';
import { ObservableMedia } from '@angular/flex-layout';
import { asAnimations } from '../../../../../../../core/animations';
import { AsMatSidenavHelperService } from '../../../../../../../core/directives/as-mat-sidenav-helper/as-mat-sidenav-helper.service';

@Component({
    selector   : 'as-chat-chats-sidenav',
    templateUrl: './chats.component.html',
    styleUrls  : ['./chats.component.scss'],
    animations : asAnimations
})
export class AsChatChatsSidenavComponent implements OnInit
{
    user: any;
    chats: any[];
    contacts: any[];
    chatSearch: any;
    searchText = '';

    constructor(
        private chatService: ChatService,
        private asMatSidenavService: AsMatSidenavHelperService,
        public media: ObservableMedia
    )
    {
        this.chatSearch = {
            name: ''
        };
    }

    ngOnInit()
    {
        this.user = this.chatService.user;
        this.chats = this.chatService.chats;
        this.contacts = this.chatService.contacts;

        this.chatService.onChatsUpdated.subscribe(updatedChats => {
            this.chats = updatedChats;
        });

        this.chatService.onUserUpdated.subscribe(updatedUser => {
            this.user = updatedUser;
        });
    }

    getChat(contact)
    {
        this.chatService.getChat(contact);

        if ( !this.media.isActive('gt-md') )
        {
            this.asMatSidenavService.getSidenav('chat-left-sidenav').toggle();
        }
    }

    setUserStatus(status)
    {
        this.chatService.setUserStatus(status);
    }

    changeLeftSidenavView(view)
    {
        this.chatService.onLeftSidenavViewChanged.next(view);
    }

    logout()
    {
        console.log('logout triggered');
    }
}
