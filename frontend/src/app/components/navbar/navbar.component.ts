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
    const toggler = this.elementRef.nativeElement.querySelector('input[type="checkbox"]') as HTMLInputElement
    if (window.innerWidth > 992)
      toggler.tabIndex = -1
    toggler.addEventListener('change', () => this.expanded = toggler.checked);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    const toggler = this.elementRef.nativeElement.querySelector('input[type="checkbox"]') as HTMLInputElement
    if (event.target.innerWidth > 992) {
      this.expanded = false
      toggler.checked = false
      toggler.tabIndex = -1
    } else {
      toggler.tabIndex = 0
    }
  }

  onLandingPage() {
    return this.router.url.match(/^\/(#.*)?$/) ? true : false;
  }
}
