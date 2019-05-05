//-------------------------------------------------------------------------
// Write your custom logic for AccountDetailsViewComponent here.
// Changes to this file are preserved when the app regenerates.
// Find more information on https://devcenter.kinvey.com/guides/studio-extension-points.
//-------------------------------------------------------------------------
import { Inject, Injector } from '@angular/core';
import { AccountDetailsViewBaseComponent } from '@src/app/modules/main/account-details/account-details.base.component';

export class AccountDetailsViewComponent extends AccountDetailsViewBaseComponent {
    constructor(@Inject(Injector) injector: Injector) {
        super(injector);
    }
}
