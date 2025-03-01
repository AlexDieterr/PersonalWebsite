import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterModule, NgxExtendedPdfViewerModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  constructor(private router: Router) {}

  projects = [
    { id: 'project1', title: 'Home Field Advantage', year: '2024-2025', tech: 'Python', image: 'project-thumbnail1.png' },
    { id: 'project2', title: 'Property Price Predictor', year: '2024-2025', tech: 'Python', image: 'project-thumbnail2.jpg' },
    { id: 'project3', title: 'Investment App', year: 2024, tech: 'Angular', image: 'project-thumbnail3.png' },
    { id: 'project4', title: 'Task Management', year: 2024, tech: 'Angular', image: 'project-thumbnail4.png' },
    { id: 'project5', title: 'Personal Website', year: 2024, tech: 'Angular', image: 'project-thumbnail5.png' },
  ];

  goToProject(projectId: string) {
    this.router.navigateByUrl(`/projects/${projectId}`);
  }
}