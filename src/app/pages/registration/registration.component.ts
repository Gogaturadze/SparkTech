import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RegistrationService } from '../../services/registration.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss',
})
export class RegistrationComponent {
  registrationForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private registrationService: RegistrationService,
    private router: Router
  ) {
    this.registrationForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: [null, Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      zipcode: ['', Validators.required],
      avatar: ['', Validators.required],
      gender: ['FEMALE', Validators.required],
    });
  }

  // submitForm() {
  //   if (this.registrationForm.valid) {
  //     const registrationData = this.registrationForm.value;
  //     this.registrationService.regUser(registrationData).subscribe();
  //     this.registrationService.verifyEmail(registrationData.email).subscribe();
  //     alert('Registration succesfull');
  //     this.router.navigate(['/']);
  //   } else {
  //     this.registrationForm.markAllAsTouched();
  //   }
  // }
  formSubmitted = false;
  submitForm() {
    this.formSubmitted = true;
    if (this.registrationForm.valid) {
      const registrationData = this.registrationForm.value;
      this.registrationService.regUser(registrationData).subscribe({
        next: () => {
          this.registrationService
            .verifyEmail(registrationData.email)
            .subscribe();
          alert('Registration successful');
          this.router.navigate(['/']);
        },
        error: (err) => {
          console.error('Registration failed', err);
          alert('Registration failed');
        },
      });
    } else {
      this.registrationForm.markAllAsTouched();
    }
  }
  shouldShowError(controlName: string): boolean {
    const control = this.registrationForm.get(controlName);
    if (!control) {
      return false;
    }
    return (
      !!(control.touched || (this.formSubmitted && control.pristine)) &&
      control.invalid
    );
  }

  getErrorMessage(controlName: string): string {
    const control = this.registrationForm.get(controlName);
    if (!control) {
      return '';
    }
    if (control.hasError('required')) {
      return 'This field is required';
    }
    if (control.hasError('email')) {
      return 'Not a valid email';
    }
    if (control.hasError('minlength')) {
      return `Minimum length is ${
        control.getError('minlength').requiredLength
      }`;
    }
    return '';
  }
}
