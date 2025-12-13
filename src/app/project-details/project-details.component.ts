import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { HeaderComponent } from '../header/header.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [CommonModule, PdfViewerModule, HeaderComponent, ContactComponent],
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent {
  projectId: string | null = '';
  project: any = null;
  isHomeFieldAdvantage = false;
  isPropertyPrice = false;
  isPdfProject = false;
  isVideoProject = false;
  isTraffic = false;
  currentPage: number | null = 1;
  isFullscreen = false;
  

  @ViewChild('pdfContainer', { static: false }) pdfContainer!: ElementRef<HTMLElement>;

  sections: { id: string; title: string; page: number }[] = [];

  toolLogos: { [key: string]: string } = {
    'Angular': 'assets/icons8-angular-48.png',
    'HTML': 'assets/icons8-html5-48.png',
    'TypeScript': 'assets/icons8-typescript-48.png',
    'Numpy': 'assets/icons8-numpy-48.png',
    'VSCode': 'assets/icons8-vs-code-48.png',
    'Node.js': 'assets/icons8-nodejs-48.png',
    'Python': 'assets/icons8-python-48.png',
    'Pandas': 'assets/icons8-pandas-48.png',
    'Github': 'assets/icons8-github-48.png',
    'Matplotlib': 'assets/Matplotlib.png',
    'Pytorch': 'assets/pytorch.png',
    'Scikit': 'assets/scikit.png',
    'Scipy': 'assets/scipy.png',
    'SAS': 'assets/sas.png',
    'PowerBi': 'assets/icons8-power-bi-48.png',
    'Excel': 'assets/icons8-excel-48.png'
  };

  projectData: Record<string, any> = {
    project1: {
      title: 'Traffic Sign Classification (CNN)',
      description: 'A CNN model built to classify traffic sign images into 43 different categories using the German Traffic Sign Recognition Benchmark (GTSRB) dataset.',
      techStack: ['Python', 'TensorFlow/Keras', 'CNN', 'Scikit', 'Matplotlib', 'Pandas', 'Numpy', 'Scipy', 'VSCode'],
      githubLink: 'https://github.com/AlexDieterr/TrafficSignNN',
      pdfUrl: '/assets/propertyprice.pdf',
      type: 'pdf',
      sections: [
        { title: 'Introduction', page: 1 },
        { title: 'Dataset Overview', page: 2 },
        { title: 'Exploratory Data Analysis', page: 4 },
        { title: 'Feature Engineering', page: 7 },
        { title: 'Modeling', page: 10 },
        { title: 'Model Evaluation', page: 14 },
        { title: 'Predictions', page: 17 },
        { title: 'Conclusion', page: 20 }
      ]
    },
    project2: {
      title: 'Pediatric Dashboard (Kaiser Permanente)',
      description: 'A dashboard I created while working with Kaiser Permanente as a Data Scientist Intern',
      techStack: ['PowerBi', 'Excel', 'SAS', 'Python'],
      videoUrl: 'assets/NSQIP_PEDS_Dashboard.mp4',
      type: 'video'
    },
    project3: {
      title: 'Property Price Predictor',
      description: 'A machine learning model to predict property prices.',
      techStack: ['Python', 'Scikit', 'Matplotlib', 'Pandas', 'Numpy', 'Scipy', 'VSCode'],
      githubLink: 'https://github.com/AlexDieterr/NewPropertyPrice',
      pdfUrl: '/assets/propertyprice.pdf',
      type: 'pdf',
      sections: [
        { title: 'Introduction', page: 1 },
        { title: 'Dataset Overview', page: 2 },
        { title: 'Exploratory Data Analysis', page: 4 },
        { title: 'Feature Engineering', page: 7 },
        { title: 'Modeling', page: 10 },
        { title: 'Model Evaluation', page: 14 },
        { title: 'Predictions', page: 17 },
        { title: 'Conclusion', page: 20 }
      ]
    },
    project4: {
      title: 'Home Field Advantage',
      description: 'An analysis of home-field advantage in professional sports using statistical modeling.',
      techStack: ['Python', 'Pandas', 'Matplotlib', 'VSCode'],
      pdfUrl: '/assets/home-field-advantage.pdf',
      type: 'pdf',
      githubLink: 'https://github.com/AlexDieterr/home-field-advantage',
      sections: [
        { title: 'Introduction', page: 1 },
        { title: 'Data', page: 2 },
        { title: 'Weather and Familiarity', page: 9 },
        { title: 'Exploratory Data Analysis', page: 12 },
        { title: 'Visualizations and Insights', page: 17 },
        { title: 'Playoffs vs Regular Season', page: 24 },
        { title: 'Rivalry Game Analysis', page: 28 }
      ]
    },
    project5: {
      title: 'Investment App',
      description: 'A web-based investment tracking app built with Angular.',
      techStack: ['Angular', 'TypeScript', 'HTML','VSCode'],
      videoUrl: 'assets/Investment_Recording.mov',  
      githubLink: 'https://github.com/AlexDieterr/InvestmentAppAngular',
      type: 'video'
    },
    project6: {
      title: 'Task Management System',
      description: 'A full-stack task management system with authentication and real-time updates.',
      techStack: ['Angular', 'Node.js', 'TypeScript'],
      videoUrl: 'assets/TaskManagement.mov', 
      githubLink: 'https://github.com/AlexDieterr/TasksManagementAngular',  
      type: 'video'
    },
    project7: {
      title: 'Personal Website',
      description: 'Hi there! This project is actually what you are currently on! I built this website from scratch on VsCode to showcase my projects, skills, and experience. It’s a clean, easy-to-navigate portfolio that gives a quick look at what I’ve built and what I’m working on. If you want to look at the code behind how I built this, scroll down a bit and click the GitHub button!',
      contactMessage: 'If you have any questions, feel free to contact me!',
      techStack: ['Angular', 'Node.js', 'TypeScript'],
      githubLink: 'https://github.com/AlexDieterr/GithubioWebsite',  
      type: 'personal'
    }
  };

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      this.projectId = params.get('id');
  
      if (this.projectId && this.projectData[this.projectId]) {
        this.project = this.projectData[this.projectId];
  
        if (this.project.type === 'pdf') {
          if (this.projectId === 'project2') {
            this.isPropertyPrice = true;
          } else if (this.projectId === 'project3') {
            this.isHomeFieldAdvantage = true;
          } else if (this.projectId === 'project1') {
            this.isTraffic = true;
          }
        this.isPdfProject = true;
        this.sections = this.project.sections || [];
      } else if (this.project.type === 'video') {
          this.isVideoProject = true;
        }
        
      }
    });
  
    document.addEventListener("fullscreenchange", () => {
      this.isFullscreen = !!document.fullscreenElement;
    });
  }

  scrollToSection(pageNumber: number) {
    if (this.currentPage === pageNumber) {
      this.currentPage = null; 
      setTimeout(() => {
        this.currentPage = pageNumber;
      }, 100);
    } else {
      this.currentPage = pageNumber;
    }
  }

  toggleFullScreen() {
    const elem = this.pdfContainer.nativeElement;
    if (!this.isFullscreen) {
      elem.requestFullscreen().catch(err => console.error("Fullscreen error:", err));
      this.isFullscreen = true;
    } else {
      document.exitFullscreen();
      this.isFullscreen = false;
    }
  }
}