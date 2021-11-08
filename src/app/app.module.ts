import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './shared/components/card/card.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { AlertComponent } from './shared/components/alert/alert.component';
import { ModalComponent } from './shared/components/modal/modal.component';
import { LoadingFrameComponent } from './shared/components/loading-frame/loading-frame.component';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HeaderComponent,
    HomeComponent,
    AlertComponent,
    ModalComponent,
    LoadingFrameComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
