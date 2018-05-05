import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../profile.service';
import { asAnimations } from '../../../../../../core/animations';

@Component({
    selector   : 'as-profile-timeline',
    templateUrl: './timeline.component.html',
    styleUrls  : ['./timeline.component.scss'],
    animations : asAnimations
})
export class AsProfileTimelineComponent implements OnInit
{
    timeline: any;

    constructor(private profileService: ProfileService)
    {
        this.profileService.timelineOnChanged.subscribe(timeline => {
            this.timeline = timeline;
        });
    }

    ngOnInit()
    {

    }
}
