import { Directive, HostListener, Input } from '@angular/core';
import { AsNavbarVerticalService } from './navbar-vertical.service';
import { AsNavbarVerticalComponent } from './navbar-vertical.component';

@Directive({
    selector: '[asNavbarVertical]'
})
export class AsNavbarVerticalToggleDirective
{
    @Input() asNavbarVertical: string;
    navbar: AsNavbarVerticalComponent;

    constructor(private navbarService: AsNavbarVerticalService)
    {
    }

    @HostListener('click')
    onClick()
    {
        this.navbar = this.navbarService.getNavBar();

        if ( !this.navbar[this.asNavbarVertical] )
        {
            return;
        }

        this.navbar[this.asNavbarVertical]();
    }
}
