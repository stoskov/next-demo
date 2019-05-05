//-------------------------------------------------------------------------
// <Auto-generated file - do not modify!>
//
// This code was generated automatically by Kinvey Studio.
//
// Changes to this file may cause undesired behavior and will be lost
// the next time the code regenerates.
//
// Find more information on https://devcenter.kinvey.com/guides/studio-extension-points.
//-------------------------------------------------------------------------
import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@src/app/shared/shared.module';
import { MainRoutingModule } from '@src/app/modules/main/main-routing.module';

import { AccountDetailsViewBaseComponent } from '@src/app/modules/main/account-details/account-details.base.component';
import { AccountDetailsViewComponent } from '@src/app/modules/main/account-details/account-details.component';
import { AccountsViewBaseComponent } from '@src/app/modules/main/accounts/accounts.base.component';
import { AccountsViewComponent } from '@src/app/modules/main/accounts/accounts.component';
import { AppointmentsViewBaseComponent } from '@src/app/modules/main/appointments/appointments.base.component';
import { AppointmentsViewComponent } from '@src/app/modules/main/appointments/appointments.component';
import { NewAppointmentDateViewBaseComponent } from '@src/app/modules/main/new-appointment-date/new-appointment-date.base.component';
import { NewAppointmentDateViewComponent } from '@src/app/modules/main/new-appointment-date/new-appointment-date.component';
import { NewAppointmentTopicViewBaseComponent } from '@src/app/modules/main/new-appointment-topic/new-appointment-topic.base.component';
import { NewAppointmentTopicViewComponent } from '@src/app/modules/main/new-appointment-topic/new-appointment-topic.component';
import { NewAppointmentViewBaseComponent } from '@src/app/modules/main/new-appointment/new-appointment.base.component';
import { NewAppointmentViewComponent } from '@src/app/modules/main/new-appointment/new-appointment.component';
import { NewTransactionViewBaseComponent } from '@src/app/modules/main/new-transaction/new-transaction.base.component';
import { NewTransactionViewComponent } from '@src/app/modules/main/new-transaction/new-transaction.component';

import { config, transformConfig } from '@src/app/modules/main/main.config';

const configMeta: NgModule = {
    providers: [...config.providers],
    declarations: [
        AccountDetailsViewBaseComponent,
        AccountDetailsViewComponent,
        AccountsViewBaseComponent,
        AccountsViewComponent,
        AppointmentsViewBaseComponent,
        AppointmentsViewComponent,
        NewAppointmentDateViewBaseComponent,
        NewAppointmentDateViewComponent,
        NewAppointmentTopicViewBaseComponent,
        NewAppointmentTopicViewComponent,
        NewAppointmentViewBaseComponent,
        NewAppointmentViewComponent,
        NewTransactionViewBaseComponent,
        NewTransactionViewComponent,
        ...config.declarations
    ],
    imports: [CommonModule, SharedModule, MainRoutingModule, ...config.imports],
    exports: [...config.exports],
    entryComponents: [...config.entryComponents],
    bootstrap: [...config.bootstrap],
    schemas: [NO_ERRORS_SCHEMA, ...config.schemas],
    jit: config.jit
};

if (config.id) {
    configMeta.id = config.id;
}

transformConfig(configMeta);

@NgModule(configMeta)
export class MainModule {}
