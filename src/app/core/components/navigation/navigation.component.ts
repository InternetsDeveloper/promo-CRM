import { Component, Input, OnDestroy, ViewEncapsulation } from '@angular/core';
import { AsNavigationService } from './navigation.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector     : 'as-navigation',
    templateUrl  : './navigation.component.html',
    styleUrls    : ['./navigation.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AsNavigationComponent implements OnDestroy
{
    navigationModel: any[];
    navigationModelChangeSubscription: Subscription;

    @Input('layout') layout = 'vertical';

    constructor(private asNavigationService: AsNavigationService)
    {
        this.navigationModelChangeSubscription =
            this.asNavigationService.onNavigationModelChange
                .subscribe((navigationModel) => {
                    this.navigationModel = navigationModel;
                });
    }

    ngOnDestroy()
    {
        this.navigationModelChangeSubscription.unsubscribe();
    }

}
