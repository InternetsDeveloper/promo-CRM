import { Component, OnInit } from '@angular/core';

import { AsConfigService } from '../../../../core/services/config.service';
import { asAnimations } from '../../../../core/animations';

@Component({
    selector   : 'as-maintenance',
    templateUrl: './maintenance.component.html',
    styleUrls  : ['./maintenance.component.scss'],
    animations : asAnimations
})
export class AsMaintenanceComponent implements OnInit
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
