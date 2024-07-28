import { Component } from '@angular/core';
import { LinkComponent } from "../link/link.component";
import { Router, Route } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [LinkComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(protected router: Router) { }

  onLandingPage() {
    return this.router.url.match(/^\/(#.*)?$/) ? true : false;
  }
}
