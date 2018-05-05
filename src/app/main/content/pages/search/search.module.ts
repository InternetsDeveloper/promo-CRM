import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../core/modules/shared.module';
import { RouterModule } from '@angular/router';

import { AsSearchClassicComponent } from './tabs/classic/classic.component';
import { AsSearchTableComponent } from './tabs/table/table.component';
import { AsSearchComponent } from './search.component';
import { SearchService } from './search.service';

const routes = [
    {
        path     : 'search',
        component: AsSearchComponent,
        resolve  : {
            search: SearchService
        }
    }
];

@NgModule({
    declarations: [
        AsSearchComponent,
        AsSearchClassicComponent,
        AsSearchTableComponent
    ],
    imports     : [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    providers   : [
        SearchService
    ]
})
export class SearchModule
{
}
