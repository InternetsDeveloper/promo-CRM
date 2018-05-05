import { Component } from '@angular/core';
import { AsConfigService } from '../../../../../core/services/config.service';
import { asAnimations } from '../../../../../core/animations';

@Component({
    selector   : 'as-mail-confirm',
    templateUrl: './mail-confirm.component.html',
    styleUrls  : ['./mail-confirm.component.scss'],
    animations : asAnimations
})
export class AsMailConfirmComponent
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
}
