//-------------------------------------------------------------------------
// Write your custom logic for NewAppointmentTopicViewComponent here.
// Changes to this file are preserved when the app regenerates.
// Find more information on https://devcenter.kinvey.com/guides/studio-extension-points.
//-------------------------------------------------------------------------
import { Inject, Injector } from '@angular/core';
import { NewAppointmentTopicViewBaseComponent } from '@src/app/modules/main/new-appointment-topic/new-appointment-topic.base.component';

export class NewAppointmentTopicViewComponent extends NewAppointmentTopicViewBaseComponent {
    constructor(@Inject(Injector) injector: Injector) {
        super(injector);
    }
}
