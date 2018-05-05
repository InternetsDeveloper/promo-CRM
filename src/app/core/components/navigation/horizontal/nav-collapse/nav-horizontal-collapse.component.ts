import { Component, HostBinding, HostListener, Input, OnDestroy } from '@angular/core';
import { asAnimations } from '../../../../animations';
import { AsConfigService } from '../../../../services/config.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector   : 'as-nav-horizontal-collapse',
    templateUrl: './nav-horizontal-collapse.component.html',
    styleUrls  : ['./nav-horizontal-collapse.component.scss'],
    animations : asAnimations
})
export class AsNavHorizontalCollapseComponent implements OnDestroy
{
    onSettingsChanged: Subscription;
    asSettings: any;
    isOpen = false;

    @HostBinding('class') classes = 'nav-item nav-collapse';
    @Input() item: any;

    @HostListener('mouseenter')
    open()
    {
        this.isOpen = true;
    }

    @HostListener('mouseleave')
    close()
    {
        this.isOpen = false;
    }

    constructor(
        private asConfig: AsConfigService
    )
    {
        this.onSettingsChanged =
            this.asConfig.onSettingsChanged
                .subscribe(
                    (newSettings) => {
                        this.asSettings = newSettings;
                    }
                );
    }

    ngOnDestroy()
    {
        this.onSettingsChanged.unsubscribe();
    }
}
