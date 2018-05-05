import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../core/modules/shared.module';
import { RouterModule } from '@angular/router';

import { AsProfileComponent } from './profile.component';
import { AsProfileTimelineComponent } from './tabs/timeline/timeline.component';
import { AsProfileAboutComponent } from './tabs/about/about.component';
import { AsProfilePhotosVideosComponent } from './tabs/photos-videos/photos-videos.component';
import { ProfileService } from './profile.service';

const routes = [
    {
        path     : 'profile',
        component: AsProfileComponent,
        resolve  : {
            profile: ProfileService
        }
    }
];

@NgModule({
    declarations: [
        AsProfileComponent,
        AsProfileTimelineComponent,
        AsProfileAboutComponent,
        AsProfilePhotosVideosComponent
    ],
    imports     : [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    providers   : [
        ProfileService
    ]
})
export class ProfileModule
{
}
