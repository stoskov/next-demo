//-------------------------------------------------------------------------
// Write your custom logic for NewAppointmentViewComponent here.
// Changes to this file are preserved when the app regenerates.
// Find more information on https://devcenter.kinvey.com/guides/studio-extension-points.
//-------------------------------------------------------------------------
import { Inject, Injector } from '@angular/core';
import { NewAppointmentViewBaseComponent } from '@src/app/modules/main/new-appointment/new-appointment.base.component';

export class NewAppointmentViewComponent extends NewAppointmentViewBaseComponent {
    constructor(@Inject(Injector) injector: Injector) {
        super(injector);
    }
}
