import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrimeNgModule } from './prime-ng/prime-ng.module';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

import { AppRouterModule } from './app-router.module';

//Cambiar el idioma de la app // cambiar el locale de la app
import localeEs from "@angular/common/locales/es-MX";
import localeCH from "@angular/common/locales/kok";
import { registerLocaleData } from "@angular/common";

registerLocaleData(localeEs);
registerLocaleData(localeCH);


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    PrimeNgModule,
    
    AppRouterModule,

    SharedModule,
    VentasModule
    

  ],
  providers: [
    {
      provide:LOCALE_ID,
      useValue: 'es-MX'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
