import { Component, OnInit } from '@angular/core';

import { ProfileService } from '../../profile.service';
import { asAnimations } from '../../../../../../core/animations';

@Component({
    selector   : 'as-profile-photos-videos',
    templateUrl: './photos-videos.component.html',
    styleUrls  : ['./photos-videos.component.scss'],
    animations : asAnimations
})
export class AsProfilePhotosVideosComponent implements OnInit
{
    photosVideos: any;

    constructor(private profileService: ProfileService)
    {
        this.profileService.photosVideosOnChanged.subscribe(photosVideos => {
            this.photosVideos = photosVideos;
        });
    }

    ngOnInit()
    {

    }
}
