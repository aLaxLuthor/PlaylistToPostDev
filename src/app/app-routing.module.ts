import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from "./app.component";
import { HomeComponent } from './home/home.component';
import { ConnectServicesComponent } from './connect-services/connect-services.component';
import { AboutComponent } from './about/about.component';


export const appRoutes: Routes = [
    {   path: '', 
        redirectTo: '/home', 
        pathMatch: 'full'},    
    {   path: 'home', 
        component: HomeComponent},
    {   path: 'connect', 
        component: ConnectServicesComponent},
    {   path: 'google', 
        canActivate: [ GoogleConnectedGuard ],
        component: ConnectServicesComponent},
    {   
        path: 'google/albums', 
        canActivate: [ GoogleConnectedGuard ],
        component: ConnectServicesComponent
    },
    {   
        path: 'google/playlists', 
        canActivate: [ GoogleConnectedGuard ],
        component: ConnectServicesComponent
    },
    {
        path: 'google/artists',
        canActivate: [ GoogleConnectedGuard ], 
        component: ConnectServicesComponent
    },
    {   
        path: 'about', 
        component: AboutComponent
    },
    {   
        path: '**', 
        redirectTo: '/not-found'
    }
];

// @NgModule({
//     imports: [
//         RouterModule.forRoot(appRoutes)
//     ],
//     exports: [RouterModule]
// })
// export class AppRoutingModule{}