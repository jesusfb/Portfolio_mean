import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-landing-tech-card',
  standalone: true,
  imports: [],
  templateUrl: './landing-tech-card.component.html',
  styleUrl: './landing-tech-card.component.css'
})
export class LandingTechCardComponent {
  @Input() tech: string = 'Some Tech';
  @Input() image: string = 'https://via.placeholder.com/150';
}
