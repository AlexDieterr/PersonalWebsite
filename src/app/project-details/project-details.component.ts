import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { ContactComponent } from '../contact/contact.component';

interface Project {
  title: string;
  description: string;
  image: string;
  liveDemo: string;
  githubLink: string;
  techStack: string[];
}

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [CommonModule, HeaderComponent, ContactComponent],
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css'],
})
export class ProjectDetailsComponent {
  projectId: string | null = '';
  project: Project | null = null;

  projectData: Record<string, Project> = {
    project1: {
      title: 'Home Field Advantage',
      description: 'An analysis of home-field advantage in professional sports using statistical modeling.',
      image: 'assets/home-field-advantage.png',
      liveDemo: '',
      githubLink: 'https://github.com/AlexDieterr/HomeFieldAdvantage',
      techStack: ['Python', 'Pandas', 'Matplotlib'],
    },
    project2: {
      title: 'Property Price Predictor',
      description: 'A machine learning model predicting property prices based on historical data and key metrics.',
      image: 'assets/property-price.png',
      liveDemo: '',
      githubLink: 'https://github.com/AlexDieterr/PropertyPricePredictor',
      techStack: ['Python', 'Scikit-Learn', 'Jupyter Notebook'],
    },
    project3: {
      title: 'Investment App',
      description: 'An Angular-based investment tracking app that allows users to monitor stocks and cryptocurrencies.',
      image: 'assets/investment-app.png',
      liveDemo: 'https://investment-app.example.com',
      githubLink: 'https://github.com/AlexDieterr/InvestmentApp',
      techStack: ['Angular', 'TypeScript', 'Firebase'],
    },
    project4: {
      title: 'Task Management',
      description: 'A productivity app to manage daily tasks and collaborate with teams effectively.',
      image: 'assets/task-manager.png',
      liveDemo: '',
      githubLink: 'https://github.com/AlexDieterr/TaskManagement',
      techStack: ['Angular', 'TypeScript', 'Node.js'],
    },
    project5: {
      title: 'Personal Website',
      description: 'The website you are currently viewing! Built with Angular to showcase my projects and experience.',
      image: 'assets/personal-website.png',
      liveDemo: '',
      githubLink: 'https://github.com/AlexDieterr/PersonalWebsite',
      techStack: ['Angular', 'CSS', 'TypeScript'],
    },
  };

  constructor(private route: ActivatedRoute) {
    this.projectId = this.route.snapshot.paramMap.get('id');
    
    if (this.projectId && this.projectData[this.projectId]) {
      this.project = this.projectData[this.projectId];
    }
  }
}