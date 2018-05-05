import { Component, HostBinding, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { asAnimations } from '../../core/animations';
import { AsConfigService } from '../../core/services/config.service';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

@Component({
    selector   : 'as-content',
    templateUrl: './content.component.html',
    styleUrls  : ['./content.component.scss'],
    animations : asAnimations
})
export class AsContentComponent implements OnInit, OnDestroy
{
    onSettingsChanged: Subscription;
    asSettings: any;

    @HostBinding('@routerTransitionUp') routeAnimationUp = false;
    @HostBinding('@routerTransitionDown') routeAnimationDown = false;
    @HostBinding('@routerTransitionRight') routeAnimationRight = false;
    @HostBinding('@routerTransitionLeft') routeAnimationLeft = false;
    @HostBinding('@routerTransitionFade') routeAnimationFade = false;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private asConfig: AsConfigService
    )
    {
        this.router.events
            .filter((event) => event instanceof NavigationEnd)
            .map(() => this.activatedRoute)
            .subscribe((event) => {
                switch ( this.asSettings.routerAnimation )
                {
                    case 'fadeIn':
                        this.routeAnimationFade = !this.routeAnimationFade;
                        break;
                    case 'slideUp':
                        this.routeAnimationUp = !this.routeAnimationUp;
                        break;
                    case 'slideDown':
                        this.routeAnimationDown = !this.routeAnimationDown;
                        break;
                    case 'slideRight':
                        this.routeAnimationRight = !this.routeAnimationRight;
                        break;
                    case 'slideLeft':
                        this.routeAnimationLeft = !this.routeAnimationLeft;
                        break;
                }
            });

        this.onSettingsChanged =
            this.asConfig.onSettingsChanged
                .subscribe(
                    (newSettings) => {
                        this.asSettings = newSettings;
                    }
                );
    }

    ngOnInit()
    {

    }

    ngOnDestroy()
    {
        this.onSettingsChanged.unsubscribe();
    }
}
