import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { MenuSuperior } from './menu-superior/menu-superior';
import { Media } from './media/media';
import { Apolice } from './apolice/apolice';
import { Temperatura } from './temperatura/temperatura';
import { Imc } from './imc/imc';

@NgModule({
  declarations: [App, MenuSuperior, Media, Apolice, Temperatura, Imc],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
