import { Component } from '@angular/core';
import { SvgIconComponent } from '@ngneat/svg-icon';
import { BlogPostCardComponent } from "../../components/blog-post-card/blog-post-card.component";
import { LinkComponent } from '../../components/link/link.component';

@Component({
  selector: 'app-blog-profile',
  standalone: true,
  imports: [SvgIconComponent, LinkComponent],
  templateUrl: './blog-profile.component.html',
  styleUrl: './blog-profile.component.css'
})
export class BlogProfileComponent {

}
