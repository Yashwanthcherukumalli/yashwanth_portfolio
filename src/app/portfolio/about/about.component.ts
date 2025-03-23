import { Component } from '@angular/core';
import { GoalsComponent } from '../goals/goals.component';
import { EducationComponent } from '../education/education.component';
import { BlogsComponent } from "../blogs/blogs.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [GoalsComponent, EducationComponent, BlogsComponent,CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  activeComponent: string = '';

  setActiveComponent(component: string) {
    this.activeComponent = component;
  }
}
