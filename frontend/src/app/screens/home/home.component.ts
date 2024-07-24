import { Component } from '@angular/core';
import { LandingTechCardComponent } from "../../components/landing-tech-card/landing-tech-card.component";
import { LandingProjectCardComponent } from '../../components/landing-project-card/landing-project-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LandingTechCardComponent, LandingProjectCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
