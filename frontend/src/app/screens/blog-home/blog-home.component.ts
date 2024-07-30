import { Component } from '@angular/core';
import { LinkComponent } from "../../components/link/link.component";

@Component({
  selector: 'app-blog-home',
  standalone: true,
  imports: [LinkComponent],
  templateUrl: './blog-home.component.html',
  styleUrl: './blog-home.component.css'
})
export class BlogHomeComponent {

}
