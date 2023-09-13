import { Component } from '@angular/core';

@Component({
  selector: 'app-partner-project-form',
  templateUrl: './partner-project-form.component.html',
  styleUrls: ['./partner-project-form.component.scss'],
})
export class PartnerProjectFormComponent {
  siteKey: string;
  constructor() {
    this.siteKey = '6Ld4ihgoAAAAAJHZmwEXPrtcqG8gKa4rKiEHjDmI';
  }
  recaptchaValue: string = '';

  // Function to handle form submission
  onSubmit() {
    // Check if the reCAPTCHA response is empty
    if (!this.recaptchaValue) {
      alert('Please complete the reCAPTCHA before submitting the form.');
      return;
    }

    // Proceed with form submission here
    // You can send the form data to your server or handle it as needed
    // ...

    // Reset the reCAPTCHA value after submission
    this.recaptchaValue = '';
  }

  // Function to handle reCAPTCHA resolved event
  onRecaptchaResolved(event: any) {
    this.recaptchaValue = event;
  }
  selectedFileName: string | null = null;

  displayFileName(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      this.selectedFileName = inputElement.files[0].name;
    } else {
      this.selectedFileName = null;
    }
  }
  countryCodes = [
    { name: 'United States', code: '+1' },
    { name: 'United Kingdom', code: '+44' },
    { name: 'Canada', code: '+1' },
    { name: 'Australia', code: '+61' },
    { name: 'Germany', code: '+49' },
    { name: 'France', code: '+33' },
    { name: 'India', code: '+91' },
    { name: 'China', code: '+86' },
    { name: 'Japan', code: '+81' },
    { name: 'South Korea', code: '+82' },
    // Add more countries and codes as needed
  ];

  selectedCountryCode: string = '';

  // Array of country names
  countries: string[] = [
    'Afghanistan',
    'Albania',
    'Algeria',
    // Add more countries here
  ];

  selectedCountry: string = ''; // To hold the selected country

  socials: string[] = [''];

  addSocialField() {
    this.socials.push('');
  }

  removeSocialField(index: number) {
    this.socials.splice(index, 1);
  }
}
