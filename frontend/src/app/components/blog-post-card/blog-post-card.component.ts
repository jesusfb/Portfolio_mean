import { Component, Input } from '@angular/core';
import { LinkComponent } from '../link/link.component';

@Component({
  selector: 'app-blog-post-card',
  standalone: true,
  imports: [LinkComponent],
  templateUrl: './blog-post-card.component.html',
  styleUrl: './blog-post-card.component.css'
})
export class BlogPostCardComponent {
  @Input({ required: true }) post!: Post
}
