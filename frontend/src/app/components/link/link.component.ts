import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-link',
  standalone: true,
  imports: [],
  templateUrl: './link.component.html',
  styleUrl: './link.component.css'
})
export class LinkComponent {
  @Input() href: string = '#';
  @Input() text: string = 'Link';
  @Input() active: boolean = false;

  scrollTo(section: string): void {
    const element = document.querySelector(section);
    if (element) {
      element.scrollIntoView();
    }
  }
}
