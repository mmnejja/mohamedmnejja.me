import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.page.html',
  styleUrl: './home.page.css',
  imports: [CommonModule]
})
export class HomePageComponent {
  academicJourney = [
    {
      title: "Master's in Accounting Digitalization",
      description: 'Focused on digital accounting systems, process automation, data quality, and transformation in finance.'
    },
    {
      title: "Master's in Internal Audit & Information Systems Audit",
      description: 'Built around internal control, assurance, audit methodology, information systems risk, and technology governance.'
    }
  ];

  projects = [
    {
      title: 'Chart of Accounts AI',
      description: 'Advanced AI-powered Chart of Accounts assistant for financial organizations',
      tags: ['AI', 'Finance', 'Angular'],
      actionLabel: 'Open Assistant',
      route: '/chart-of-accounts-ai'
    },
    {
      title: 'Power BI Financial Dashboard',
      description: 'Comprehensive financial analytics dashboard with Power BI integration',
      tags: ['Power BI', 'Analytics', 'Dashboard'],
      actionLabel: 'Open Report',
      route: '/power-bi-financial-dashboard'
    },
    {
      title: 'CSRD Reporting Simulation',
      description: 'Corporate Sustainability Reporting Directive compliance simulation tool',
      tags: ['Sustainability', 'Reporting', 'Compliance'],
      actionLabel: 'Open Simulation',
      route: '/csrd-reporting-simulation'
    }
  ];

  blogPosts = [
    {
      title: 'AI in Audit',
      excerpt: 'How machine intelligence is improving precision, speed, and audit quality across engagements.'
    },
    {
      title: 'Future of Accounting',
      excerpt: 'Why the next generation accountant combines finance expertise with automation and analytics.'
    },
    {
      title: 'SAP vs Odoo',
      excerpt: 'A practical comparison of enterprise depth, implementation effort, and scalability by context.'
    }
  ];

  skills = [
    {
      category: 'Accounting & Audit',
      items: ['Excel', 'Power BI', 'Internal Control', 'Financial Analysis']
    },
    {
      category: 'Data & AI',
      items: ['Python', 'n8n', 'Automation Workflows', 'Anomaly Detection']
    },
    {
      category: 'ERP Systems',
      items: ['SAP', 'Odoo', 'Sage', 'Microsoft Dynamics']
    }
  ];

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  emailCopied = false;
  private _copyTimeout: any;

  async copyEmail() {
    const email = 'contact.mmnejja@gmail.com';
    try {
      await navigator.clipboard.writeText(email);
      this.emailCopied = true;
      clearTimeout(this._copyTimeout);
      this._copyTimeout = setTimeout(() => (this.emailCopied = false), 1800);
    } catch (err) {
      console.error('Copy failed', err);
    }
  }

  // Contact form state
  sending = false;
  emailSent = false;
  sendError = false;

  async sendMessage(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const name = (form.querySelector('[name="name"]') as HTMLInputElement)?.value || '';
    const email = (form.querySelector('[name="email"]') as HTMLInputElement)?.value || '';
    const message = (form.querySelector('[name="message"]') as HTMLTextAreaElement)?.value || '';

    if (!name || !email || !message) {
      this.sendError = true;
      return;
    }

    this.sending = true;
    this.emailSent = false;
    this.sendError = false;

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    try {
      // Using EmailJS in-browser service.
      await emailjs.send(
        'service_uw77v8w', // service ID
        'template_8m9hmgq', // template ID
        templateParams,
        'Daw0Q03oJcyR462IL' // public key
      );

      alert('Message sent successfully!');
      this.emailSent = true;
      form.reset();
    } catch (error) {
      console.error('FAILED...', error);
      this.sendError = true;
      alert('Send failed');
    } finally {
      this.sending = false;
      setTimeout(() => (this.emailSent = false), 4000);
    }
  }
}
