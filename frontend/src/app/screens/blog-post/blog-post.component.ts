import { Component } from '@angular/core';
import { BadgeComponent } from "../../components/badge/badge.component";
import { StarsRatingComponent } from '../../components/stars-rating/stars-rating.component';
import { RouterLink } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [BadgeComponent, StarsRatingComponent, RouterLink],
  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.css'
})
export class BlogPostComponent {
  constructor(private location: Location) { }

  goBack() {
    this.location.back();
  }
}
