import { Component } from '@angular/core';
import { LinkComponent } from "../../components/link/link.component";
import { BadgeComponent } from "../../components/badge/badge.component";

@Component({
  selector: 'app-blog-home',
  standalone: true,
  imports: [LinkComponent, BadgeComponent],
  templateUrl: './blog-home.component.html',
  styleUrl: './blog-home.component.css'
})
export class BlogHomeComponent {

}
