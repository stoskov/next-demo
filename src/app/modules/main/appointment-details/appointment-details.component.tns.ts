//-------------------------------------------------------------------------
// Write your custom logic for AppointmentDetailsViewComponent here.
// Changes to this file are preserved when the app regenerates.
// Find more information on https://devcenter.kinvey.com/guides/studio-extension-points.
//-------------------------------------------------------------------------
import { Inject, Injector } from '@angular/core';
import { AppointmentDetailsViewBaseComponent } from '@src/app/modules/main/appointment-details/appointment-details.base.component';

export class AppointmentDetailsViewComponent extends AppointmentDetailsViewBaseComponent {
    constructor(@Inject(Injector) injector: Injector) {
        super(injector);
    }
}
