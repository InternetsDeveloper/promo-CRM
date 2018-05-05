import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../core/modules/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { AsCalendarComponent } from './calendar.component';
import { CalendarService } from './calendar.service';
import { CalendarModule } from 'angular-calendar';
import { AsCalendarEventFormDialogComponent } from './event-form/event-form.component';

const routes: Routes = [
    {
        path     : '**',
        component: AsCalendarComponent,
        children : [],
        resolve  : {
            chat: CalendarService
        }
    }
];

@NgModule({
    imports        : [
        SharedModule,
        RouterModule.forChild(routes),
        CalendarModule.forRoot()
    ],
    declarations   : [
        AsCalendarComponent,
        AsCalendarEventFormDialogComponent
    ],
    providers      : [
        CalendarService
    ],
    entryComponents: [AsCalendarEventFormDialogComponent]
})
export class AsCalendarModule
{
}
