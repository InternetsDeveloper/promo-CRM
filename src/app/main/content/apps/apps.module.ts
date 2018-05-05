import { NgModule } from '@angular/core';
import { SharedModule } from '../../../core/modules/shared.module';
import { RouterModule } from '@angular/router';
import { AsAngularMaterialModule } from '../components/angular-material/angular-material.module';

const routes = [
    {
        path        : 'dashboards/project',
        loadChildren: './dashboards/project/project.module#AsProjectDashboardModule'
    },
    {
        path        : 'mail',
        loadChildren: './mail/mail.module#AsMailModule'
    },
    {
        path        : 'chat',
        loadChildren: './chat/chat.module#AsChatModule'
    },
    {
        path        : 'calendar',
        loadChildren: './calendar/calendar.module#AsCalendarModule'
    },
    {
        path        : 'todo',
        loadChildren: './todo/todo.module#AsTodoModule'
    },
    {
        path        : 'file-manager',
        loadChildren: './file-manager/file-manager.module#AsFileManagerModule'
    },
    {
        path        : 'contacts',
        loadChildren: './contacts/contacts.module#AsContactsModule'
    }

];

@NgModule({
    imports     : [
        SharedModule,
        RouterModule.forChild(routes),
        AsAngularMaterialModule
    ],
    declarations: []
})
export class AsAppsModule
{
}
