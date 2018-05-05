import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../core/modules/shared.module';
import { RouterModule, Routes } from '@angular/router';

import { AsTypographyComponent } from './typography.component';
import { AsTypographyHeadingsComponent } from './tabs/headings/headings.component';
import { AsTypographyInlineTextElementsComponent } from './tabs/inline-text-elements/inline-text-elements.component';
import { AsTypographyBlockquotesListsComponent } from './tabs/blockquotes-lists/blockquotes-lists.component';
import { AsTypographyHelpersComponent } from './tabs/helpers/helpers.component';

const routes: Routes = [
    {
        path     : 'typography',
        component: AsTypographyComponent
    }
];

@NgModule({
    imports     : [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        AsTypographyComponent,
        AsTypographyHeadingsComponent,
        AsTypographyInlineTextElementsComponent,
        AsTypographyBlockquotesListsComponent,
        AsTypographyHelpersComponent
    ]
})
export class UITypographyModule
{
}
