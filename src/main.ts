import '@angular/localize/init';
import {bootstrapApplication} from '@angular/platform-browser';
import {VERSION as CDK_VERSION} from '@angular/cdk';
import {VERSION as MAT_VERSION, MatNativeDateModule} from '@angular/material/core';
import { AppComponent } from './app.component';
import { appConfig } from './app.config';

console.info('Angular CDK version', CDK_VERSION.full);
console.info('Angular Material version', MAT_VERSION.full);


bootstrapApplication(AppComponent ,appConfig,)
.catch((err) => console.error(err));
