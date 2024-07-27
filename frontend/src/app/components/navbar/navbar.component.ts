import { Component } from '@angular/core';
import { LinkComponent } from "../link/link.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [LinkComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
