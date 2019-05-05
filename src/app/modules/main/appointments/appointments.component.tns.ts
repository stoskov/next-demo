//-------------------------------------------------------------------------
// Write your custom logic for AppointmentsViewComponent here.
// Changes to this file are preserved when the app regenerates.
// Find more information on https://devcenter.kinvey.com/guides/studio-extension-points.
//-------------------------------------------------------------------------
import { Inject, Injector } from '@angular/core';
import { AppointmentsViewBaseComponent } from '@src/app/modules/main/appointments/appointments.base.component';

export class AppointmentsViewComponent extends AppointmentsViewBaseComponent {
    constructor(@Inject(Injector) injector: Injector) {
        super(injector);
    }
}
