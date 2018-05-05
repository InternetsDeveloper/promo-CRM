import { Component, ElementRef, HostBinding, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { style, animate, AnimationBuilder, AnimationPlayer } from '@angular/animations';
import { Subscription } from 'rxjs/Subscription';
import { AsConfigService } from '../../services/config.service';
import { asAnimations } from '../../animations';
import { AsNavigationService } from '../navigation/navigation.service';

@Component({
    selector   : 'as-theme-options',
    templateUrl: './theme-options.component.html',
    styleUrls  : ['./theme-options.component.scss'],
    animations : asAnimations
})
export class AsThemeOptionsComponent implements OnInit, OnDestroy
{
    @ViewChild('openButton') openButton;
    @ViewChild('panel') panel;
    @ViewChild('overlay') overlay: ElementRef;

    public player: AnimationPlayer;
    asSettings: any;

    onSettingsChanged: Subscription;

    @HostBinding('class.bar-closed') barClosed: boolean;

    constructor(
        private animationBuilder: AnimationBuilder,
        private asConfig: AsConfigService,
        private navigationService: AsNavigationService,
        private renderer: Renderer2
    )
    {
        this.barClosed = true;

        this.onSettingsChanged =
            this.asConfig.onSettingsChanged
                .subscribe(
                    (newSettings) => {
                        this.asSettings = newSettings;
                    }
                );

        // Get the nav model and add customize nav item
        // that opens the bar programmatically
        const navModel = this.navigationService.getNavigationModel();

        navModel.push({
            'id'      : 'custom-function',
            'title'   : 'Custom Function',
            'type'    : 'group',
            'children': [
                {
                    'id'      : 'customize',
                    'title'   : 'Customize',
                    'type'    : 'item',
                    'icon'    : 'settings',
                    'function': () => {
                        this.openBar();
                    }
                }
            ]
        });
    }

    ngOnInit()
    {
        this.renderer.listen(this.overlay.nativeElement, 'click', () => {
            this.closeBar();
        });
    }

    onSettingsChange()                                                      
    {
        this.asConfig.setSettings(this.asSettings);
    }

    closeBar()
    {
        this.player =
            this.animationBuilder
                .build([
                    style({transform: 'translate3d(0,0,0)'}),
                    animate('400ms ease', style({transform: 'translate3d(100%,0,0)'}))
                ]).create(this.panel.nativeElement);

        this.player.play();

        this.player.onDone(() => {
            this.barClosed = true;
        });
    }

    openBar()
    {
        this.barClosed = false;

        this.player =
            this.animationBuilder
                .build([
                    style({transform: 'translate3d(100%,0,0)'}),
                    animate('400ms ease', style({transform: 'translate3d(0,0,0)'}))
                ]).create(this.panel.nativeElement);

        this.player.play();
    }

    ngOnDestroy()
    {
        this.onSettingsChanged.unsubscribe();
    }
}
