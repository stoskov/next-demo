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
import { Injectable, Inject } from '@angular/core';
import { BaseStorageService } from '@src/app/core/base-storage.service';

@Injectable()
export class SessionStorageService extends BaseStorageService {
    constructor(@Inject('Window') window: Window) {
        super();
        this.storage = window.sessionStorage;
    }
}
