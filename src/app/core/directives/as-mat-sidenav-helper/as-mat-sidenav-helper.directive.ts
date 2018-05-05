import { Directive, Input, OnInit, HostListener, OnDestroy, HostBinding } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { ObservableMedia } from '@angular/flex-layout';
import { Subscription } from 'rxjs/Subscription';
import { AsMatchMedia } from '../../services/match-media.service';
import { AsMatSidenavHelperService } from './as-mat-sidenav-helper.service';

@Directive({
    selector: '[asMatSidenavHelper]'
})
export class AsMatSidenavHelperDirective implements OnInit, OnDestroy
{
    matchMediaSubscription: Subscription;

    @HostBinding('class.mat-is-locked-open') isLockedOpen = true;

    @Input('asMatSidenavHelper') id: string;
    @Input('mat-is-locked-open') matIsLockedOpenBreakpoint: string;

    constructor(
        private asMatSidenavService: AsMatSidenavHelperService,
        private asMatchMedia: AsMatchMedia,
        private observableMedia: ObservableMedia,
        private matSidenav: MatSidenav
    )
    {
    }

    ngOnInit()
    {
        this.asMatSidenavService.setSidenav(this.id, this.matSidenav);

        if ( this.observableMedia.isActive(this.matIsLockedOpenBreakpoint) )
        {
            this.isLockedOpen = true;
            this.matSidenav.mode = 'side';
            this.matSidenav.toggle(true);
        }
        else
        {
            this.isLockedOpen = false;
            this.matSidenav.mode = 'over';
            this.matSidenav.toggle(false);
        }

        this.matchMediaSubscription = this.asMatchMedia.onMediaChange.subscribe(() => {
            if ( this.observableMedia.isActive(this.matIsLockedOpenBreakpoint) )
            {
                this.isLockedOpen = true;
                this.matSidenav.mode = 'side';
                this.matSidenav.toggle(true);
            }
            else
            {
                this.isLockedOpen = false;
                this.matSidenav.mode = 'over';
                this.matSidenav.toggle(false);
            }
        });
    }

    ngOnDestroy()
    {
        this.matchMediaSubscription.unsubscribe();
    }
}

@Directive({
    selector: '[asMatSidenavToggler]'
})
export class AsMatSidenavTogglerDirective
{
    @Input('asMatSidenavToggler') id;

    constructor(private asMatSidenavService: AsMatSidenavHelperService)
    {
    }

    @HostListener('click')
    onClick()
    {
        this.asMatSidenavService.getSidenav(this.id).toggle();
    }
}
