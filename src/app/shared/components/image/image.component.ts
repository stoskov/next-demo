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
import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
    selector: 'ks-image',
    templateUrl: './image.component.html',
})
export class KsImageComponent {
    @ViewChild('imageElement') public imageElement: ElementRef;

    @Input() public config: any;
    @Input() public id: string;
    @Input() public src: string;
}
