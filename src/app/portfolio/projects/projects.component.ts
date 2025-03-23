import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  repos: any[] = [];

  ngOnInit() {
    fetch('https://api.github.com/users/Yashwanthcherukumalli/repos')
      .then(response => response.json())
      .then(data => {
        this.repos = data;
      });
  }
}
