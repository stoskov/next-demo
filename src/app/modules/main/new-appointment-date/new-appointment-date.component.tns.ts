//-------------------------------------------------------------------------
// Write your custom logic for NewAppointmentDateViewComponent here.
// Changes to this file are preserved when the app regenerates.
// Find more information on https://devcenter.kinvey.com/guides/studio-extension-points.
//-------------------------------------------------------------------------
import { Inject, Injector } from '@angular/core';
import { NewAppointmentDateViewBaseComponent } from '@src/app/modules/main/new-appointment-date/new-appointment-date.base.component';

export class NewAppointmentDateViewComponent extends NewAppointmentDateViewBaseComponent {
    constructor(@Inject(Injector) injector: Injector) {
        super(injector);
    }
}
