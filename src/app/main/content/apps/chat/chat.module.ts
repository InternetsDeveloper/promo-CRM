import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../core/modules/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { AsChatComponent } from './chat.component';
import { ChatService } from './chat.service';
import { AsChatViewComponent } from './chat-view/chat-view.component';
import { AsChatStartComponent } from './chat-start/chat-start.component';
import { AsChatChatsSidenavComponent } from './sidenavs/left/chats/chats.component';
import { AsChatUserSidenavComponent } from './sidenavs/left/user/user.component';
import { AsChatLeftSidenavComponent } from './sidenavs/left/left.component';
import { AsChatRightSidenavComponent } from './sidenavs/right/right.component';
import { AsChatContactSidenavComponent } from './sidenavs/right/contact/contact.component';

const routes: Routes = [
    {
        path     : '**',
        component: AsChatComponent,
        children : [],
        resolve  : {
            chat: ChatService
        }
    }
];

@NgModule({
    imports     : [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        AsChatComponent,
        AsChatViewComponent,
        AsChatStartComponent,
        AsChatChatsSidenavComponent,
        AsChatUserSidenavComponent,
        AsChatLeftSidenavComponent,
        AsChatRightSidenavComponent,
        AsChatContactSidenavComponent
    ],
    providers   : [
        ChatService
    ]
})
export class AsChatModule
{
}
