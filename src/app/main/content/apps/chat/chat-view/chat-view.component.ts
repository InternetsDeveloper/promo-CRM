import { AfterViewInit, Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { ChatService } from '../chat.service';
import { NgForm } from '@angular/forms';
import { AsPerfectScrollbarDirective } from '../../../../../core/directives/as-perfect-scrollbar/as-perfect-scrollbar.directive';

@Component({
    selector   : 'as-chat-view',
    templateUrl: './chat-view.component.html',
    styleUrls  : ['./chat-view.component.scss']
})
export class AsChatViewComponent implements OnInit, AfterViewInit
{
    user: any;
    chat: any;
    dialog: any;
    contact: any;
    replyInput: any;
    selectedChat: any;
    @ViewChild(AsPerfectScrollbarDirective) directiveScroll: AsPerfectScrollbarDirective;
    @ViewChildren('replyInput') replyInputField;
    @ViewChild('replyForm') replyForm: NgForm;

    constructor(private chatService: ChatService)
    {
    }

    ngOnInit()
    {
        this.user = this.chatService.user;
        this.chatService.onChatSelected
            .subscribe(chatData => {
                if ( chatData )
                {
                    this.selectedChat = chatData;
                    this.contact = chatData.contact;
                    this.dialog = chatData.dialog;
                    this.readyToReply();
                }
            });
    }

    ngAfterViewInit()
    {
        this.replyInput = this.replyInputField.first.nativeElement;
        this.readyToReply();
    }

    selectContact()
    {
        this.chatService.selectContact(this.contact);
    }

    readyToReply()
    {
        setTimeout(() => {
            this.replyForm.reset();
            this.focusReplyInput();
            this.scrollToBottom();
        });

    }

    focusReplyInput()
    {
        setTimeout(() => {
            this.replyInput.focus();
        });
    }

    scrollToBottom(speed?: number)
    {
        speed = speed || 400;
        if ( this.directiveScroll )
        {
            this.directiveScroll.update();

            setTimeout(() => {
                this.directiveScroll.scrollToBottom(0, speed);
            });
        }
    }

    reply(event)
    {
        // Message
        const message = {
            who    : this.user.id,
            message: this.replyForm.form.value.message,
            time   : new Date().toISOString()
        };

        // Add the message to the chat
        this.dialog.push(message);

        // Update the server
        this.chatService.updateDialog(this.selectedChat.chatId, this.dialog).then(response => {
            this.readyToReply();
        });

    }
}
