import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  repos: any[] = [];
  totalProjects = 0;
  languageCounts: { [key: string]: number } = {};
  pieChartData: { name: string; value: number; color: string }[] = [];
  chartStyle: { [key: string]: string } = {};

  colorPalette = [
    '#FF5733', '#33FF57', '#3357FF', '#F4C542', '#42F4D9',
    '#A833FF', '#FF33A8', '#33FFF1', '#FF8C33', '#8C33FF',
    '#33FF8C', '#FFC733', '#33C7FF', '#FF336E', '#5C33FF'
  ];

  ngOnInit() {
    fetch('https://api.github.com/users/Yashwanthcherukumalli/repos?per_page=100&page=1')
      .then(response => response.json())
      .then(data => {
         // Sorting projects from latest to oldest based on created_at
         this.repos = data.sort((a: any, b: any) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
         this.totalProjects = this.repos.length;
 

        // Count languages
        this.languageCounts = this.repos.reduce((counts: { [key: string]: number }, repo: any) => {
          let language = repo.language || (repo.name.toLowerCase().includes('powerbi') ? 'Power BI' : '');
          counts[language] = (counts[language] || 0) + 1;
          return counts;
        }, {});

        this.generatePieChartData();
      })
      .catch(error => console.error('Error fetching repos:', error));
  }

  generatePieChartData() {
    let cumulativePercent = 0;
    const gradientSlices: string[] = [];

    this.pieChartData = Object.keys(this.languageCounts).map((lang, index) => {
      const percent = (this.languageCounts[lang] / this.totalProjects) * 100;
      const startPercent = cumulativePercent;
      cumulativePercent += percent;
      gradientSlices.push(`${this.colorPalette[index % this.colorPalette.length]} ${startPercent}% ${cumulativePercent}%`);
      
      return { 
        name: lang, 
        value: this.languageCounts[lang], 
        color: this.colorPalette[index % this.colorPalette.length] 
      };
    });

    this.chartStyle = { '--gradient': gradientSlices.join(', ') };
  }
  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', { month: 'long', year: 'numeric' });
  }
  
}
