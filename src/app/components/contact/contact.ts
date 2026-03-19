import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact implements OnInit {
  contactForm!: FormGroup;
  isLoading = false;
  isSuccess = false;
  isError = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    emailjs.init('3LXVLmoGpS0KxtWce');
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      service: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  async onSubmit(): Promise<void> {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }
    this.isLoading = true;
    this.isError = false;
    try {
      await emailjs.send('service_ap48rjr', 'template_dr9bwbh', {
        from_name: this.contactForm.value.name,
        from_email: this.contactForm.value.email,
        service: this.contactForm.value.service,
        message: this.contactForm.value.message,
      });
      this.isSuccess = true;
      this.contactForm.reset();
    } catch {
      this.isError = true;
    } finally {
      this.isLoading = false;
    }
  }
}
