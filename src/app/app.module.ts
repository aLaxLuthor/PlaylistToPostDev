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
// import * as firebase from 'firebase';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ConnectServicesComponent } from './connect-services/connect-services.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './services/auth.service';

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

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
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'angular-auth-firebase'),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
