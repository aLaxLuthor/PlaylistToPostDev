import { Component } from '@angular/core';

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
}
