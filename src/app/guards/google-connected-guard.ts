import { Injectable } from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';

@Injectable()
export class GoogleConnectedGuard implements CanActivate {
  constructor(
    private store: Store<fromRoot.State>,
    // private googleBooks: GoogleBooksService,
    private router: Router
  ) { }
