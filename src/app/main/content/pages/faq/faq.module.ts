import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../core/modules/shared.module';
import { RouterModule } from '@angular/router';
import { AsFaqComponent } from './faq.component';
import { FaqService } from './faq.service';

const routes = [
    {
        path     : 'faq',
        component: AsFaqComponent,
        resolve  : {
            faq: FaqService
        }
    }
];

@NgModule({
    declarations: [
        AsFaqComponent
    ],
    imports     : [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    providers   : [
        FaqService
    ]
})
export class FaqModule
{
}
