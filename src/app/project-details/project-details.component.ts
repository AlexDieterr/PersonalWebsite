import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { HeaderComponent } from '../header/header.component';
import { ContactComponent } from '../contact/contact.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [CommonModule, PdfViewerModule, HeaderComponent, ContactComponent],
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css'],
})
export class ProjectDetailsComponent {
  projectId: string | null = '';
  project: any = null;
  isHomeFieldAdvantage = false;
  isPropertyPrice = false;
  isPdfProject = false;
  isVideoProject = false;
  isTraffic = false;
  isKeystroke = false;
  currentPage: number | null = 1;
  isFullscreen = false;
  isDragging = false;
  isGenerating = false;
  isPredicting = false;
  modelWorkingTimer: any = null;
  showModelWorking = false;
  showSlowApiMessage = false;
  slowApiTimer: any = null;

  showScrollCue = true;
  scrollCueText = 'Scroll for analysis and more';
  scrollCueArrow = '↓';

  generatedImages: { image: string; label: string }[] = [];
  selectedImage: string | null = null;

  predictionResult: {
    prediction: string;
    confidence: number;
  } | null = null;

  @ViewChild('demoSection', { static: false })
  demoSection!: ElementRef<HTMLElement>;
  @ViewChild('analysisSection') analysisSection!: ElementRef<HTMLElement>;
  @ViewChild('pdfContainer', { static: false })
  pdfContainer!: ElementRef<HTMLElement>;

  sections: { id: string; title: string; page: number }[] = [];

  toolLogos: { [key: string]: string } = {
    Angular: 'assets/icons8-angular-48.png',
    HTML: 'assets/icons8-html5-48.png',
    TypeScript: 'assets/icons8-typescript-48.png',
    Numpy: 'assets/icons8-numpy-48.png',
    VSCode: 'assets/icons8-vs-code-48.png',
    'Node.js': 'assets/icons8-nodejs-48.png',
    Python: 'assets/icons8-python-48.png',
    Pandas: 'assets/icons8-pandas-48.png',
    Github: 'assets/icons8-github-48.png',
    Matplotlib: 'assets/Matplotlib.png',
    Pytorch: 'assets/pytorch.png',
    Scikit: 'assets/scikit.png',
    Scipy: 'assets/scipy.png',
    SAS: 'assets/sas.png',
    PowerBi: 'assets/icons8-power-bi-48.png',
    Excel: 'assets/icons8-excel-48.png',
  };

  projectData: Record<string, any> = {
    project1: {
      title: 'Keystroke Dynamics: Identifying Users via Typing Behavior',
      description:
        'This project investigates whether users can be identified solely from keystroke timing data, without relying on the actual text being typed. The analysis explores how individual typing patterns differ and evaluates multiple models to measure how separable users are based on their keystroke dynamics.',
      techStack: [
        'Python',
        'Pandas',
        'Numpy',
        'Scikit',
        'Matplotlib',
        'VSCode',
      ],
      pdfUrl: '/assets/keystroke_dynamics_walkthrough.pdf',
      type: 'pdf',
      sections: [
        { title: 'Introduction and Dataset', page: 1 },
        { title: 'Problem Setup', page: 2 },
        { title: 'Model Comparison', page: 3 },
        { title: 'Differences Across users', page: 4 },
        { title: 'Separability', page: 7 },
        { title: 'Feature Importance', page: 8 },
        { title: 'Conclusion', page: 9 },
      ],
    },

    project2: {
      title: 'Traffic Sign Classification (CNN)',
      description:
        'A CNN model built to classify traffic sign images into 43 different categories using the German Traffic Sign Recognition Benchmark (GTSRB) dataset.',
      techStack: [
        'Python',
        'TensorFlow/Keras',
        'CNN',
        'Scikit',
        'Matplotlib',
        'Pandas',
        'Numpy',
        'Scipy',
        'VSCode',
      ],
      githubLink: 'https://github.com/AlexDieterr/TrafficSignNN',
      pdfUrl: '/assets/TrafficCNN.pdf',
      type: 'pdf',
      sections: [
        { title: 'Introduction', page: 1 },
        { title: 'Dataset Overview', page: 2 },
        { title: 'Exploratory Data Analysis', page: 4 },
        { title: 'Feature Engineering', page: 7 },
        { title: 'Modeling', page: 10 },
        { title: 'Model Evaluation', page: 14 },
        { title: 'Predictions', page: 17 },
        { title: 'Conclusion', page: 20 },
      ],
    },

    project3: {
      title: 'Pediatric Dashboard (Kaiser Permanente)',
      description:
        'A dashboard I created while working with Kaiser Permanente as a Data Scientist Intern',
      techStack: ['PowerBi', 'Excel', 'SAS', 'Python'],
      videoUrl: 'assets/NSQIP_PEDS_Dashboard.mp4',
      type: 'video',
    },

    project4: {
      title: 'Property Price Predictor',
      description: 'A machine learning model to predict property prices.',
      techStack: [
        'Python',
        'Scikit',
        'Matplotlib',
        'Pandas',
        'Numpy',
        'Scipy',
        'VSCode',
      ],
      githubLink: 'https://github.com/AlexDieterr/NewPropertyPrice',
      pdfUrl: '/assets/propertyprice.pdf',
      type: 'pdf',
      sections: [
        { title: 'Introduction', page: 1 },
        { title: 'Exploratory Data Analysis', page: 4 },
        { title: 'Feature Engineering', page: 7 },
        { title: 'Modeling', page: 10 },
        { title: 'Model Evaluation', page: 14 },
        { title: 'Predictions', page: 17 },
        { title: 'Conclusion', page: 20 },
      ],
    },

    project5: {
      title: 'Home Field Advantage',
      description:
        'An analysis of home-field advantage in professional sports using statistical modeling.',
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
        { title: 'Rivalry Game Analysis', page: 28 },
      ],
    },

    project6: {
      title: 'Personal Website',
      description:
        'Hi there! This project is actually what you are currently on! I built this website from scratch on VsCode to showcase my projects, skills, and experience. It’s a clean, easy-to-navigate portfolio that gives a quick look at what I’ve built and what I’m working on. If you want to look at the code behind how I built this, scroll down a bit and click the GitHub button!',
      contactMessage: 'If you have any questions, feel free to contact me!',
      techStack: ['Angular', 'Node.js', 'TypeScript'],
      githubLink: 'https://github.com/AlexDieterr/GithubioWebsite',
      type: 'personal',
    },

    project7: {
      title: 'Investment App',
      description: 'A web-based investment tracking app built with Angular.',
      techStack: ['Angular', 'TypeScript', 'HTML', 'VSCode'],
      videoUrl: 'assets/Investment_Recording.mov',
      githubLink: 'https://github.com/AlexDieterr/InvestmentAppAngular',
      type: 'video',
    },

    project8: {
      title: 'Task Management System',
      description:
        'A full-stack task management system with authentication and real-time updates.',
      techStack: ['Angular', 'Node.js', 'TypeScript'],
      videoUrl: 'assets/TaskManagement.mov',
      githubLink: 'https://github.com/AlexDieterr/TasksManagementAngular',
      type: 'video',
    },
  };

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.route.paramMap.subscribe((params) => {
      this.projectId = params.get('id');

      if (this.projectId && this.projectData[this.projectId]) {
        this.project = this.projectData[this.projectId];

        if (this.project.type === 'pdf') {
          if (this.projectId === 'project4') {
            this.isPropertyPrice = true;
          } else if (this.projectId === 'project5') {
            this.isHomeFieldAdvantage = true;
          } 
          else if (this.projectId === 'project1') {
            this.isKeystroke = true;
          }
          else if (this.projectId === 'project2') {
            this.isTraffic = true;
            this.pingTrafficApi();
          }
          this.isPdfProject = true;
          this.sections = this.project.sections || [];
        } else if (this.project.type === 'video') {
          this.isVideoProject = true;
        }
      }
    });

    document.addEventListener('fullscreenchange', () => {
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
      elem
        .requestFullscreen()
        .catch((err) => console.error('Fullscreen error:', err));
      this.isFullscreen = true;
    } else {
      document.exitFullscreen();
      this.isFullscreen = false;
    }
  }
  generateImages() {
    this.isGenerating = true;
    this.showSlowApiMessage = false;

    // Start a 1-second timer
    this.slowApiTimer = setTimeout(() => {
      this.showSlowApiMessage = true;
    }, 1000);

    this.http
      .get<any[]>('https://trafficsignnn.onrender.com/random-images?n=5')
      .subscribe({
        next: (data) => {
          clearTimeout(this.slowApiTimer);

          this.generatedImages = data;
          this.selectedImage = null;
          this.predictionResult = null;
          this.isGenerating = false;

          this.showSlowApiMessage = false;
        },
        error: () => {
          clearTimeout(this.slowApiTimer);
          this.isGenerating = false;
          this.showSlowApiMessage = false;
        },
      });
  }

  predictFromBase64(base64Image: string) {
    this.selectedImage = base64Image;
    this.predictionResult = null;

    // Delay showing loading message so fast predictions don't flash
    this.modelWorkingTimer = setTimeout(() => {
      this.showModelWorking = true;
    }, 400);

    const blob = this.base64ToBlob(base64Image);
    const formData = new FormData();
    formData.append('file', blob, 'image.png');

    this.http
      .post<any>('https://trafficsignnn.onrender.com/predict', formData)
      .subscribe({
        next: (result) => {
          clearTimeout(this.modelWorkingTimer);
          this.showModelWorking = false;

          // Force re-appearance animation
          setTimeout(() => {
            this.predictionResult = result;
          }, 80);
        },
        error: () => {
          clearTimeout(this.modelWorkingTimer);
          this.showModelWorking = false;
        },
      });
  }

  private base64ToBlob(base64: string): Blob {
    const byteCharacters = atob(base64);
    const byteNumbers = new Array(byteCharacters.length);

    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    return new Blob([byteArray], { type: 'image/png' });
  }

  onDragStart(base64Image: string) {
    this.selectedImage = base64Image;
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    this.isDragging = true;
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    this.isDragging = false;
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    this.isDragging = false;

    const data = event.dataTransfer?.getData('text/plain');
    if (data) {
      this.predictFromBase64(data);
    }
  }
  ngAfterViewInit() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
    window.addEventListener('resize', this.positionScrollCue.bind(this));

    // Initial position after view renders
    setTimeout(() => this.positionScrollCue(), 0);
    }

  handleScroll() {
    if (!this.demoSection) return;

    const rect = this.demoSection.nativeElement.getBoundingClientRect();
    const demoBottom = rect.bottom;
    const viewportHeight = window.innerHeight;

    if (demoBottom > viewportHeight * 0.3) {
      this.scrollCueText = 'Scroll for analysis and more';
      this.scrollCueArrow = '↓';
      this.showScrollCue = true;
    } else {
      this.scrollCueText = 'Scroll for demo';
      this.scrollCueArrow = '↑';
      this.showScrollCue = true;
    }
  }

  onScrollCueClick() {
    // Scroll down to analysis
    if (this.scrollCueArrow === '↓' && this.analysisSection) {
      this.analysisSection.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }

    // Scroll up to demo
    if (this.scrollCueArrow === '↑' && this.demoSection) {
      const yOffset = -220;
      const element = this.demoSection.nativeElement;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({
        top: y,
        behavior: 'smooth',
      });
    }
  }

  pingTrafficApi() {
    this.http.get('https://trafficsignnn.onrender.com/health').subscribe({
      next: () => {},
      error: () => {},
    });
  }

  positionScrollCue() {
    const cue = document.querySelector('.analysis-scroll-cue') as HTMLElement;
    if (!cue || !this.demoSection) return;

    const demoRect = this.demoSection.nativeElement.getBoundingClientRect();
    const cueWidth = cue.offsetWidth;

    // True midpoint between viewport left (0) and demo left
    const midpoint = demoRect.left / 2;

    // Offset by half the cue width so it is actually centered
    cue.style.left = `${midpoint - cueWidth / 2}px`;
  }
}
