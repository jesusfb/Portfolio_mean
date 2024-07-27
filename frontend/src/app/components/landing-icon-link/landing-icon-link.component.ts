import { Component, Input } from '@angular/core';
import { SvgIconComponent, SvgIcons } from '@ngneat/svg-icon';

@Component({
  selector: 'app-landing-icon-link',
  standalone: true,
  imports: [SvgIconComponent],
  templateUrl: './landing-icon-link.component.html',
  styleUrl: './landing-icon-link.component.css'
})
export class LandingIconLinkComponent {
  @Input() text: string = 'Icon'
  @Input() icon: SvgIcons = 'github'
  @Input() href: string = '#'
  @Input() download: boolean | null = null
  @Input() target: string | null = '_blank'
}
