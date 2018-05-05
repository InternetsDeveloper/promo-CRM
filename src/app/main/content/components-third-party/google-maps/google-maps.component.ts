import { Component } from '@angular/core';

@Component({
    selector   : 'as-google-maps-docs',
    templateUrl: './google-maps.component.html',
    styleUrls  : ['./google-maps.component.scss']
})
export class AsGoogleMapsDocsComponent
{
    lat = -34.397;
    lng = 150.644;

    constructor()
    {

    }
}
