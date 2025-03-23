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
  projects = [
    {
      name: 'My Practice Angular',
      description: 'Angular practice project showcasing component creation and routing.',
      link: 'https://github.com/Yashwanthcherukumalli/mypracticeangular'
    },
    {
      name: 'My Shop',
      description: 'E-commerce project using Angular and TypeScript.',
      link: 'https://github.com/Yashwanthcherukumalli/myshop'
    },
    {
      name: 'Portfolio',
      description: 'Personal portfolio built with TypeScript.',
      link: 'https://github.com/Yashwanthcherukumalli/portfolio'
    },
    {
      name: 'Visa2Fly',
      description: 'Web application for visa services and travel.',
      link: 'https://github.com/Yashwanthcherukumalli/visa2fly'
    },
    {
      name: 'Flipkart Clone',
      description: 'Clone of Flipkart using Angular.',
      link: 'https://github.com/Yashwanthcherukumalli/flipkartclone'
    },
    {
      name: 'Realme Clone',
      description: 'Clone of Realme website using HTML, CSS, and JS.',
      link: 'https://github.com/Yashwanthcherukumalli/realmeclone'
    }
  ];
}
