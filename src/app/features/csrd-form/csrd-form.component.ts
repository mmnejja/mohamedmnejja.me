import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CsrdService } from '../../core/services/csrd.service';

@Component({
  selector: 'app-csrd-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './csrd-form.component.html',
  styleUrls: ['./csrd-form.component.css']
})
export class CsrdFormComponent {
  steps = [
    'Enter your contact details',
    'Upload the CSRD HTML report',
    'Let n8n send, process, and respond'
  ];

  loading = false;
  message = '';
  errorMessage = '';
  file?: File;
  fileName = '';

  @ViewChild('formRef') formRef?: NgForm;

  constructor(private csrd: CsrdService, private router: Router) {}

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    const selectedFile = input.files?.[0];

    this.errorMessage = '';
    this.message = '';
    this.file = undefined;
    this.fileName = '';

    if (!selectedFile) {
      return;
    }

    const isHtmlFile = selectedFile.type === 'text/html' || /\.html?$/i.test(selectedFile.name);
    if (!isHtmlFile) {
      input.value = '';
      this.errorMessage = 'Only .html files are allowed.';
      return;
    }

    this.file = selectedFile;
    this.fileName = selectedFile.name;
  }

  async onSubmit(form: NgForm) {
    this.errorMessage = '';
    this.message = '';

    if (form.invalid) {
      this.errorMessage = 'Please complete all required fields.';
      return;
    }

    if (!this.file) {
      this.errorMessage = 'Please upload an .html file.';
      return;
    }

    const formData = new FormData();
    formData.append('name', form.value.name);
    formData.append('email', form.value.email);
    formData.append('file', this.file, this.file.name);

    this.loading = true;

    try {
      await this.csrd.sendReport(formData);
      this.message = 'Report sent successfully. Your upload is now being processed by n8n.';
      form.resetForm();
      this.file = undefined;
      this.fileName = '';
      this.router.navigate(['/csrd-reporting-simulation/dashboard']);
    } catch (error) {
      this.errorMessage = error instanceof Error ? error.message : 'Error sending report. Please try again.';
    } finally {
      this.loading = false;
    }
  }
}
