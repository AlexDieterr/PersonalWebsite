import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  form = {
    name: '',
    email: '',
    message: ''
  };

  loading = false;
  success = false;
  error = false;

  sendEmail() {
    this.loading = true;
    this.success = false;
    this.error = false;

    emailjs.send(
      'service_k4vby0g',
      'template_bifxwfl',
      {
        from_name: this.form.name,
        from_email: this.form.email,
        message: this.form.message
      },
      'uVSKrQXyx7R_cuHA3'
    )
    .then(() => {
      this.success = true;
      this.loading = false;
      this.form = { name: '', email: '', message: '' };
    })
    .catch(() => {
      this.error = true;
      this.loading = false;
    });
  }
}