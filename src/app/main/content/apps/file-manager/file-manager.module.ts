import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../core/modules/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { AsFileManagerComponent } from './file-manager.component';
import { FileManagerService } from './file-manager.service';
import { AsFileManagerFileListComponent } from './file-list/file-list.component';
import { AsFileManagerMainSidenavComponent } from './sidenavs/main/main.component';
import { AsFileManagerDetailsSidenavComponent } from './sidenavs/details/details.component';

const routes: Routes = [
    {
        path     : '**',
        component: AsFileManagerComponent,
        children : [],
        resolve  : {
            files: FileManagerService
        }
    }
];

@NgModule({
    imports     : [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        AsFileManagerComponent,
        AsFileManagerFileListComponent,
        AsFileManagerMainSidenavComponent,
        AsFileManagerDetailsSidenavComponent
    ],
    providers   : [
        FileManagerService
    ]
})
export class AsFileManagerModule
{
}
