import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../profile.service';
import { asAnimations } from '../../../../../../core/animations';

@Component({
    selector   : 'as-profile-about',
    templateUrl: './about.component.html',
    styleUrls  : ['./about.component.scss'],
    animations : asAnimations
})
export class AsProfileAboutComponent implements OnInit
{
    about: any;

    constructor(private profileService: ProfileService)
    {
        this.profileService.aboutOnChanged.subscribe(about => {
            this.about = about;
        });
    }

    ngOnInit()
    {

    }
}
