import { Component, OnInit } from '@angular/core';

import { AsConfigService } from '../../../../../core/services/config.service';

@Component({
    selector   : 'as-error-404',
    templateUrl: './error-404.component.html',
    styleUrls  : ['./error-404.component.scss']
})
export class AsError404Component implements OnInit
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
