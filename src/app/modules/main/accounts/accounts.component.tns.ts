//-------------------------------------------------------------------------
// Write your custom logic for AccountsViewComponent here.
// Changes to this file are preserved when the app regenerates.
// Find more information on https://devcenter.kinvey.com/guides/studio-extension-points.
//-------------------------------------------------------------------------
import { Inject, Injector } from '@angular/core';
import { AccountsViewBaseComponent } from '@src/app/modules/main/accounts/accounts.base.component';

export class AccountsViewComponent extends AccountsViewBaseComponent {
    constructor(@Inject(Injector) injector: Injector) {
        super(injector);
    }
}
