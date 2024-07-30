import { Component } from '@angular/core';
import { BadgeComponent } from "../../components/badge/badge.component";
import { StarsRatingComponent } from '../../components/stars-rating/stars-rating.component';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [BadgeComponent, StarsRatingComponent],
  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.css'
})
export class BlogPostComponent {
}
