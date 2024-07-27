import { Component } from '@angular/core';
import { LandingTechCardComponent } from "../../components/landing-tech-card/landing-tech-card.component";
import { LandingProjectCardComponent } from '../../components/landing-project-card/landing-project-card.component';
import { LandingIconLinkComponent } from "../../components/landing-icon-link/landing-icon-link.component";
import { LinkComponent } from "../../components/link/link.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LandingTechCardComponent, LandingProjectCardComponent, LandingIconLinkComponent, LinkComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
