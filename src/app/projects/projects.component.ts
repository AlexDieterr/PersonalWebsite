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
      title: 'Identifying Users via Typing Behavior',
      year: '2025',
      tech: 'Python, Machine Learning, Statistics',
      image: 'assets/keystroke-thumbnail2.png',
    },
    {
      id: 'project2',
      title: 'Traffic Sign Classification using Neural Networks',
      year: '2025',
      tech: 'Python, TensorFlow, Keras, Deep Learning',
      image: 'assets/thumbnail_traffic.webp',
    },
    {
      id: 'project3',
      title: 'Surgical Quality and Outcome Dashboard (Kaiser Permanente)',
      year: '2025',
      tech: 'PowerBI, SAS, Python, Excel',
      image: 'assets/kaiser-thumbnail.png',
    },
    {
      id: 'project4',
      title: 'Comparing Regression Models for Housing Prices',
      year: '2024–2025',
      tech: 'Python, Machine Learning, Statistics',
      image: 'assets/project-thumbnail_Property.png',
    },
    {
      id: 'project5', 
      title: 'Home Field Advantage',
      year: '2024–2025',
      tech: 'Python, Data Analysis',
      image: 'assets/project-thumbnail_HFA2.png',
    },
    {
      id: 'project6',
      title: 'Portfolio Website',
      year: '2024-Present',
      tech: 'Angular, Web Development',
      image: 'assets/project-thumbnail5.png',
    },
    {
      id: 'project7',
      title: 'Task Management',
      year: '2024',
      tech: 'Angular',
      image: 'assets/project-thumbnail4.png',
    },
    {
      id: 'project8',
      title: 'Investment App',
      year: '2024',
      tech: 'Angular',
      image: 'assets/project-thumbnail3.png',
    },
    
  ];

  goToProject(projectId: string) {
    this.router.navigateByUrl(`/projects/${projectId}`).then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}
