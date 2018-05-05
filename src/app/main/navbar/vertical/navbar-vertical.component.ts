import { Component, ElementRef, HostBinding, HostListener, Input, OnDestroy, OnInit, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { AsMatchMedia } from '../../../core/services/match-media.service';
import { AsNavbarVerticalService } from './navbar-vertical.service';
import { ObservableMedia } from '@angular/flex-layout';
import { AsMainComponent } from '../../main.component';
import { NavigationEnd, Router } from '@angular/router';
import { AsNavigationService } from '../../../core/components/navigation/navigation.service';
import { AsPerfectScrollbarDirective } from '../../../core/directives/as-perfect-scrollbar/as-perfect-scrollbar.directive';
import { animate, AnimationBuilder, AnimationPlayer, style } from '@angular/animations';

@Component({
    selector     : 'as-navbar-vertical',
    templateUrl  : './navbar-vertical.component.html',
    styleUrls    : ['./navbar-vertical.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AsNavbarVerticalComponent implements OnInit, OnDestroy
{
    private _backdropElement: HTMLElement | null = null;
    private _folded = false;

    @HostBinding('class.close') isClosed: boolean;
    @HostBinding('class.folded') isFoldedActive: boolean;
    @HostBinding('class.folded-open') isFoldedOpen: boolean;
    @HostBinding('class.initialized') initialized: boolean;
    @ViewChild(AsPerfectScrollbarDirective) asPerfectScrollbarDirective;

    @Input()
    set folded(value: boolean)
    {
        this._folded = value;

        if ( this._folded )
        {
            this.activateFolded();
        }
        else
        {
            this.deActivateFolded();
        }
    }

    get folded(): boolean
    {
        return this._folded;
    }

    matchMediaWatcher: Subscription;
    navigationServiceWatcher: Subscription;
    asPerfectScrollbarUpdateTimeout;

    player: AnimationPlayer;

    constructor(
        private asMainComponent: AsMainComponent,
        private asMatchMedia: AsMatchMedia,
        private asNavigationService: AsNavigationService,
        private navBarService: AsNavbarVerticalService,
        private router: Router,
        private _renderer: Renderer2,
        private _elementRef: ElementRef,
        private animationBuilder: AnimationBuilder,
        public media: ObservableMedia
    )
    {
        navBarService.setNavBar(this);

        this.navigationServiceWatcher =
            this.asNavigationService.onNavCollapseToggle.subscribe(() => {
                this.asPerfectScrollbarUpdateTimeout = setTimeout(() => {
                    this.asPerfectScrollbarDirective.update();
                }, 310);
            });

        this.matchMediaWatcher =
            this.asMatchMedia.onMediaChange
                .subscribe((mediaStep) => {
                    setTimeout(() => {

                        if ( this.media.isActive('lt-lg') )
                        {
                            this.closeBar();
                            this.deActivateFolded();
                        }
                        else
                        {
                            this.openBar();
                            this._detachBackdrop();
                        }
                    });
                });

        router.events.subscribe(
            (event) => {
                if ( event instanceof NavigationEnd )
                {
                    if ( this.media.isActive('lt-lg') )
                    {
                        setTimeout(() => {
                            this.closeBar();
                        });
                    }
                }
            }
        );
    }

    ngOnInit()
    {
        this.isClosed = false;
        this.isFoldedActive = this._folded;
        this.isFoldedOpen = false;
        this.initialized = false;
        this.updateCssClasses();

        setTimeout(() => {
            this.initialized = true;
        });

        if ( this.media.isActive('lt-lg') )
        {
            this.closeBar();
            this.deActivateFolded();
        }
        else
        {
            if ( !this._folded )
            {
                this.deActivateFolded();
            }
            else
            {
                this.activateFolded();
            }
        }
    }

    ngOnDestroy()
    {
        clearTimeout(this.asPerfectScrollbarUpdateTimeout);
        this.matchMediaWatcher.unsubscribe();
        this.navigationServiceWatcher.unsubscribe();
    }

    openBar()
    {
        if ( !this.isClosed )
        {
            return;
        }

        this.isClosed = false;
        this.updateCssClasses();
        if ( this.media.isActive('lt-lg') )
        {
            this._attachBackdrop();
        }
    }

    closeBar()
    {
        if ( this.isClosed )
        {
            return;
        }

        this.isClosed = true;
        this.updateCssClasses();
        this._detachBackdrop();
    }

    toggleBar()
    {
        if ( this.isClosed )
        {
            this.openBar();
        }
        else
        {
            this.closeBar();
        }
    }

    toggleFold()
    {
        if ( !this.isFoldedActive )
        {
            this.activateFolded();
        }
        else
        {
            this.deActivateFolded();
        }
    }

    activateFolded()
    {
        this.isFoldedActive = true;
        this.asMainComponent.addClass('as-nav-bar-folded');
        this.isFoldedOpen = false;
    }

    deActivateFolded()
    {
        this.isFoldedActive = false;
        this.asMainComponent.removeClass('as-nav-bar-folded');
        this.isFoldedOpen = false;
    }

    @HostListener('mouseenter')
    onMouseEnter()
    {
        this.isFoldedOpen = true;
    }

    @HostListener('mouseleave')
    onMouseLeave()
    {
        this.isFoldedOpen = false;
    }

    updateCssClasses()
    {
        if ( !this.isClosed )
        {
            this.asMainComponent.addClass('as-navbar-opened');
            this.asMainComponent.removeClass('as-navbar-closed');
        }
        else
        {
            this.asMainComponent.addClass('as-navbar-closed');
            this.asMainComponent.removeClass('as-navbar-opened');
        }
    }

    private _attachBackdrop()
    {
        this._backdropElement = this._renderer.createElement('div');
        this._backdropElement.classList.add('as-navbar-backdrop');

        this._renderer.appendChild(this._elementRef.nativeElement.parentElement, this._backdropElement);

        this.player =
            this.animationBuilder
                .build([
                    animate('400ms ease', style({opacity: 1}))
                ]).create(this._backdropElement);

        this.player.play();

        this._backdropElement.addEventListener('click', () => {
                this.closeBar();
            }
        );
    }

    private _detachBackdrop()
    {
        if ( this._backdropElement )
        {
            this.player =
                this.animationBuilder
                    .build([
                        animate('400ms cubic-bezier(.25,.8,.25,1)', style({opacity: 0}))
                    ]).create(this._backdropElement);

            this.player.play();

            this.player.onDone(() => {
                if ( this._backdropElement )
                {
                    this._backdropElement.parentNode.removeChild(this._backdropElement);
                    this._backdropElement = null;
                }
            });
        }
    }
}
