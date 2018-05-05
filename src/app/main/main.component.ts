import { Component, ElementRef, HostBinding, Inject, OnDestroy, OnInit, Renderer2, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { AsConfigService } from '../core/services/config.service';
import { Platform } from '@angular/cdk/platform';
import { DOCUMENT } from '@angular/common';

@Component({
    selector     : 'as-main',
    templateUrl  : './main.component.html',
    styleUrls    : ['./main.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AsMainComponent implements OnInit, OnDestroy
{
    onSettingsChanged: Subscription;
    asSettings: any;
    @HostBinding('attr.as-layout-mode') layoutMode;

    constructor(
        private _renderer: Renderer2,
        private _elementRef: ElementRef,
        private asConfig: AsConfigService,
        private platform: Platform,
        @Inject(DOCUMENT) private document: any
    )
    {
        this.onSettingsChanged =
            this.asConfig.onSettingsChanged
                .subscribe(
                    (newSettings) => {
                        this.asSettings = newSettings;
                        this.layoutMode = this.asSettings.layout.mode;
                    }
                );

        if ( this.platform.ANDROID || this.platform.IOS )
        {
            this.document.body.className += ' is-mobile';
        }
    }

    ngOnInit()
    {
    }

    ngOnDestroy()
    {
        this.onSettingsChanged.unsubscribe();
    }

    addClass(className: string)
    {
        this._renderer.addClass(this._elementRef.nativeElement, className);
    }

    removeClass(className: string)
    {
        this._renderer.removeClass(this._elementRef.nativeElement, className);
    }
}
