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
  isVideoProject = false;
  currentPage: number | null = 1;
  isFullscreen = false;

  @ViewChild('pdfContainer', { static: false }) pdfContainer!: ElementRef<HTMLElement>;

  sections: { id: string; title: string; page: number }[] = [];

  toolLogos: { [key: string]: string } = {
    'Angular': '/icons8-angular-48.png',
    'HTML': '/icons8-html5-48.png',
    'TypeScript': '/icons8-typescript-48.png',
    'Numpy': '/icons8-numpy-48.png',
    'VSCode': '/icons8-vs-code-48.png',
    'Node.js': '/icons8-nodejs-48.png',
    'Python': '/icons8-python-48.png',
    'Pandas':'/icons8-pandas-48.png',
    'Github':'/icons8-python-48.png',
    'Matplotlib':'/Matplotlib.png',
    'Pytorch':'/pytorch.png',
    'Scikit':'/scikit.png',
    'Scipy':'/scipy.png'

  };

  projectData: Record<string, any> = {
    project1: {
      title: 'Home Field Advantage',
      description: 'An analysis of home-field advantage in professional sports using statistical modeling.',
      techStack: ['Python', 'Pandas', 'Matplotlib','VSCode'],
      pdfUrl: '/assets/home-field-advantage.pdf',
      type: 'pdf'
    },
    project2: {
      title: 'Property Price Predictor',
      description: 'A machine learning model to predict property prices.',
      techStack: ['Python', 'Scikit', 'Pytorch', 'Pandas', 'Numpy', 'Scipy','VSCode'],
      githubLink: 'https://github.com/AlexDieterr/NewPropertyPrice',
      type: 'property'
    },
    project3: {
      title: 'Investment App',
      description: 'A web-based investment tracking app built with Angular.',
      techStack: ['Angular', 'TypeScript', 'HTML','VSCode'],
      videoUrl: '/Investment_Recording.mov',  // ✅ MOV format (convert to MP4 if needed)
      githubLink: 'https://github.com/AlexDieterr/InvestmentAppAngular',
      type: 'video'
    },
    project4: {
      title: 'Task Management System',
      description: 'A full-stack task management system with authentication and real-time updates.',
      techStack: ['Angular', 'Node.js', 'TypeScript'],
      videoUrl: '/TaskManagement.mov',  // ✅ Correct video file
      githubLink: 'https://github.com/AlexDieterr/TasksManagementAngular',  // ✅ Correct GitHub repo
      type: 'video'
    },
    project5: {
      title: 'Personal Website',
      description: 'Hi there! This project is actually what you are currently on! I built this website from scratch on VsCode to showcase my projects, skills, and experience. It’s a clean, easy-to-navigate portfolio that gives a quick look at what I’ve built and what I’m working on. If you want to look at the code behind how I built this, scroll down a bit and click the GitHub button!',
      contactMessage: 'If you have any questions, feel free to contact me!',
      techStack: ['Angular', 'Node.js', 'TypeScript'],
      githubLink: 'https://github.com/AlexDieterr/GithubioWebsite',  // ✅ Correct GitHub repo
      type: 'personal'
    }
  };

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      this.projectId = params.get('id');
  
      if (this.projectId && this.projectData[this.projectId]) {
        this.project = this.projectData[this.projectId];
  
        if (this.project.type === 'pdf') {
          this.isHomeFieldAdvantage = true;
          this.sections = [
            { id: 'intro', title: 'Introduction', page: 1 },
            { id: 'data', title: 'Data', page: 2 },
            { id: 'weather', title: 'Weather & Familiarity', page: 9 },
            { id: 'explore', title: 'Exploratory Data Analysis', page: 12 },
            { id: 'viz', title: 'Visualizations & Insights', page: 17 },
            { id: 'playoff', title: 'Playoffs vs. Regular Season', page: 24 },
            { id: 'rivalry', title: 'Rivalry Game Analysis', page: 28 },
          ];
        } else if (this.project.type === 'video') {
          this.isVideoProject = true;
        }
        // For 'personal', we don't set either flag.
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

  /* ✅ Toggle Fullscreen Mode */
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