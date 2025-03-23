import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss'
})
export class BlogsComponent {
  blogs=[
    {
      "title": "JavaScript Master Guide",
      "description": "A comprehensive guide covering core and advanced JavaScript concepts, including ES6+ features, DOM manipulation, and best practices.",
      "date": "March 20, 2025",
      "link": "https://www.linkedin.com/pulse/javascript-master-guide-yashwanth-cherukumalli-7uruf"
    },
    {
      "title": "CSS Master Guide",
      "description": "An in-depth CSS guide covering flexbox, grid, animations, and responsive design techniques.",
      "date": "March 18, 2025",
      "link": "https://www.linkedin.com/pulse/css-master-guide-yashwanth-cherukumalli-splbf"
    },
    {
      "title": "HTML Master Guide",
      "description": "A complete HTML guide including semantic elements, forms, accessibility, and SEO best practices.",
      "date": "March 16, 2025",
      "link": "https://www.linkedin.com/pulse/html-master-guide-yashwanth-cherukumalli-2lbif"
    }
  ]
  
}
