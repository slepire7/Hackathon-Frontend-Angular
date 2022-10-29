import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardComponent } from './components/card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { CardService } from './services/card.service';
import { HttpErrorHandler } from './http-error-handler.service';
import { SharedModule } from 'src/shared/shared.module';
import { ModalComponent } from './components/modal/modal.component';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
  ],
  providers: [CardService, HttpErrorHandler],
  bootstrap: [AppComponent]
})
export class AppModule { }
