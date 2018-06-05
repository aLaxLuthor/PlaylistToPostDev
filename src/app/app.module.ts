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

import { StoreModule } from '@ngrx/store';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ConnectServicesComponent } from './connect-services/connect-services.component';
// import * as firebase from 'firebase';
import { SideNavComponent } from './side-nav/side-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    ConnectServicesComponent,
    SideNavComponent
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
    StoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
