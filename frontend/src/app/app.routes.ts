import { Routes } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { BlogHomeComponent } from './screens/blog-home/blog-home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'blog', component: BlogHomeComponent },
];
