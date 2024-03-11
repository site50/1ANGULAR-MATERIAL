import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes } from "@angular/router";
import { appRoutes } from './app.routes';
import { RouterModule } from '@angular/router';
import { importProvidersFrom, inject, enableProdMode } from '@angular/core';


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(appRoutes),
    importProvidersFrom(RouterModule.forRoot(appRoutes)),
    provideAnimations(), provideHttpClient() 
  ]
};
