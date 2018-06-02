import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule,
          MatCheckboxModule,
          MatListModule,
          MatToolbarModule, 
          MatIconModule, 
          MatButtonModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ConnectServicesComponent } from './connect-services/connect-services.component';
import * as firebase from 'firebase';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    ConnectServicesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
