import { Component } from '@angular/core';
import { LinkComponent } from "../link/link.component";
import { SvgIconComponent } from '@ngneat/svg-icon';

@Component({
  selector: 'app-landing-project-card',
  standalone: true,
  imports: [LinkComponent, SvgIconComponent],
  templateUrl: './landing-project-card.component.html',
  styleUrl: './landing-project-card.component.css'
})
export class LandingProjectCardComponent {

}
