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
    {
      id: 'project1',
      title: 'Traffic Sign Classification',
      year: '2025',
      tech: 'Python, TensorFlow, Angular',
      image: 'assets/thumbnail_traffic.webp',
    },
    {
      id: 'project2',
      title: 'NSQIP Dashboard (Kaiser Permanente)',
      year: '2025',
      tech: 'PowerBI, SAS, Python, Excel',
      image: 'assets/kaiser-thumbnail.png',
    },
    {
      id: 'project3',
      title: 'Comparing Regression Models for Housing Prices',
      year: '2024-2025',
      tech: 'Python',
      image: 'assets/project-thumbnail_Property.png',
    },
    {
      id: 'project4',
      title: 'Home Field Advantage',
      year: '2024-2025',
      tech: 'Python',
      image: 'assets/project-thumbnail_HFA.png',
    },
    {
      id: 'project5',
      title: 'Investment App',
      year: 2024,
      tech: 'Angular',
      image: 'assets/project-thumbnail3.png',
    },
    {
      id: 'project6',
      title: 'Task Management',
      year: 2024,
      tech: 'Angular',
      image: 'assets/project-thumbnail4.png',
    },
    {
      id: 'project7',
      title: 'Personal Portfolio Website',
      year: '2024',
      tech: 'Angular',
      image: 'assets/project-thumbnail5.png',
    },
  ];

  goToProject(projectId: string) {
    this.router.navigateByUrl(`/projects/${projectId}`).then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}
