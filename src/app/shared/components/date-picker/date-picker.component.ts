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
import { Component, ViewChild } from '@angular/core';
import { KsDateInputBaseComponent } from '@src/app/shared/components/date-input.base.component';
import { DatePickerComponent } from '@progress/kendo-angular-dateinputs';

@Component({
    selector: 'ks-date-picker',
    templateUrl: './date-picker.component.html',
})
export class KsDatePickerComponent extends KsDateInputBaseComponent {
    @ViewChild(DatePickerComponent) public datePicker: DatePickerComponent;
}
