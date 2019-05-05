//-------------------------------------------------------------------------
// Write your custom logic for NewTransactionViewComponent here.
// Changes to this file are preserved when the app regenerates.
// Find more information on https://devcenter.kinvey.com/guides/studio-extension-points.
//-------------------------------------------------------------------------
import { Inject, Injector } from '@angular/core';
import { NewTransactionViewBaseComponent } from '@src/app/modules/main/new-transaction/new-transaction.base.component';

export class NewTransactionViewComponent extends NewTransactionViewBaseComponent {
    constructor(@Inject(Injector) injector: Injector) {
        super(injector);
    }
}
