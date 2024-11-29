import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { CommonModule } from '@angular/common';

@NgModule({

  imports: [
    BrowserModule,
    CommonModule, 
    AppRoutingModule,
    AppComponent,
  ],
  providers: []
})
export class AppModule { }
