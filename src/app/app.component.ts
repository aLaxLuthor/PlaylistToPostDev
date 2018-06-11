import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './services/auth.service'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  sideNavFixed: string[] = ['Home', 'Connect', 'Services', 'About'];
  events: string[] = [];
  opened: boolean;

  constructor(private route: ActivatedRoute, private router: Router, private _authService: AuthService){
    
  }

  googleLogin(){
    if(!this._authService.isLoggedIn()){
      this._authService.signInWithGoogle()
      .then((res) => {
        this.router.navigate(['connect'])
     })
     .catch((err) => console.log(err));
    }
    else{
      this.router.navigate(['./connect'])    
    }
  } 
}
