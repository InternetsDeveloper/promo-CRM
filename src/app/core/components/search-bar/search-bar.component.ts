import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AsConfigService } from '../../services/config.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector   : 'as-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls  : ['./search-bar.component.scss']
})
export class AsSearchBarComponent implements OnInit
{
    collapsed: boolean;
    toolbarColor: string;
    @Output() onInput: EventEmitter<any> = new EventEmitter();
    onSettingsChanged: Subscription;

    constructor(
        private asConfig: AsConfigService
    )
    {
        this.collapsed = true;
        this.onSettingsChanged =
            this.asConfig.onSettingsChanged
                .subscribe(
                    (newSettings) => {
                        this.toolbarColor = newSettings.colorClasses.toolbar;
                    }
                );
    }

    ngOnInit()
    {

    }

    collapse()
    {
        this.collapsed = true;
    }

    expand()
    {
        this.collapsed = false;
    }

    search(event)
    {
        const value = event.target.value;

        this.onInput.emit(value);
    }

}
