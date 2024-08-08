import { AfterViewInit, Component, ElementRef, HostListener } from '@angular/core';
import { LinkComponent } from "../link/link.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [LinkComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements AfterViewInit {
  expanded: boolean = false

  constructor(protected router: Router, private elementRef: ElementRef) { }

  ngAfterViewInit(): void {
    const toggler = this.elementRef.nativeElement.querySelector('input[type="checkbox"]') as HTMLInputElement;
    toggler.addEventListener('change', () => this.expanded = toggler.checked);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (event.target.innerWidth > 992) {
      const toggler = this.elementRef.nativeElement.querySelector('input[type="checkbox"]') as HTMLInputElement
      this.expanded = false
      toggler.checked = false
    }
  }

  onLandingPage() {
    return this.router.url.match(/^\/(#.*)?$/) ? true : false;
  }
}
