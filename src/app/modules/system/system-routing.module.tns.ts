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
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { HomeViewComponent } from '@src/app/modules/system/home/home.component';
import { LoginViewComponent } from '@src/app/modules/system/login/login.component';
import { RegisterViewComponent } from '@src/app/modules/system/register/register.component';
import { AuthenticationGuardService } from '@src/app/core/auth/authentication-guard.service';

import { config } from '@src/app/modules/system/system-routing.config';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: 'home',
        canActivate: [AuthenticationGuardService],
        component: HomeViewComponent
    },
    {
        path: 'login',
        component: LoginViewComponent
    },
    {
        path: 'register',
        component: RegisterViewComponent
    },
    ...config.routes
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class SystemRoutingModule {}
