import { Component, OnInit } from '@angular/core';

import { AsConfigService } from '../../../../../core/services/config.service';

@Component({
    selector   : 'as-error-500',
    templateUrl: './error-500.component.html',
    styleUrls  : ['./error-500.component.scss']
})
export class AsError500Component implements OnInit
{
    constructor(
        private asConfig: AsConfigService
    )
    {
        this.asConfig.setSettings({
            layout: {
                navigation: 'none',
                toolbar   : 'none',
                footer    : 'none'
            }
        });
    }

    ngOnInit()
    {
    }
}
