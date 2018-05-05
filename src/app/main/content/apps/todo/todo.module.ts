import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../core/modules/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { AsTodoComponent } from './todo.component';
import { TodoService } from './todo.service';
import { AsTodoMainSidenavComponent } from './sidenavs/main/main-sidenav.component';
import { AsTodoListItemComponent } from './todo-list/todo-list-item/todo-list-item.component';
import { AsTodoListComponent } from './todo-list/todo-list.component';
import { AsTodoDetailsComponent } from './todo-details/todo-details.component';

const routes: Routes = [
    {
        path     : 'all',
        component: AsTodoComponent,
        resolve  : {
            todo: TodoService
        }
    },
    {
        path     : 'all/:todoId',
        component: AsTodoComponent,
        resolve  : {
            todo: TodoService
        }
    },
    {
        path     : 'tag/:tagHandle',
        component: AsTodoComponent,
        resolve  : {
            todo: TodoService
        }
    },
    {
        path     : 'tag/:tagHandle/:todoId',
        component: AsTodoComponent,
        resolve  : {
            todo: TodoService
        }
    },
    {
        path     : 'filter/:filterHandle',
        component: AsTodoComponent,
        resolve  : {
            todo: TodoService
        }
    },
    {
        path     : 'filter/:filterHandle/:todoId',
        component: AsTodoComponent,
        resolve  : {
            todo: TodoService
        }
    },
    {
        path      : '**',
        redirectTo: 'all'
    }
];

@NgModule({
    declarations: [
        AsTodoComponent,
        AsTodoMainSidenavComponent,
        AsTodoListItemComponent,
        AsTodoListComponent,
        AsTodoDetailsComponent
    ],
    imports     : [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    providers   : [
        TodoService
    ]
})
export class AsTodoModule
{
}
