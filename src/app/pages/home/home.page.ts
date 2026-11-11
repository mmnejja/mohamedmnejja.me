import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.page.html',
  styleUrl: './home.page.css',
  imports: [CommonModule, RouterLink]
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
      title: 'Business Plan Profitability',
      description: 'Financial planning and investment profitability analysis tool.',
      tags: ['Finance', 'Planning', 'Profitability'],
      actionLabel: 'Open Business Plan',
      route: '/business-plan-profitability'
    },
    {
      title: 'Audit Sampling Tool',
      description: 'A professional audit sampling application designed to automate audit sample selection, calculate sample sizes, assess transaction risks, and generate audit working papers.',
      tags: ['Audit', 'Sampling', 'ISA 530', 'Financial Audit'],
      actionLabel: 'Open Audit Sampling Tool',
      route: '/audit-sampling-tool'
    },
    {
      title: 'Internal Audit & Risk Management System',
      description: 'A comprehensive internal audit and risk management platform designed to support audit planning, risk assessment, internal controls evaluation, audit execution, and reporting.',
      tags: ['Internal Audit', 'Risk Management', 'Internal Control', 'Audit Planning'],
      actionLabel: 'Open IARMS',
      route: '/internal-audit-risk-management-system'
    },
    {
      title: 'IS Audit & Cybersecurity Toolkit',
      description: 'A comprehensive toolkit designed to support Information Systems auditing, IT controls assessment, cybersecurity reviews, risk identification, and security assessment activities.',
      tags: ['IT Audit', 'Cybersecurity', 'Information Systems', 'Risk Assessment'],
      actionLabel: 'Open IS Audit & Cybersecurity Toolkit',
      route: '/is-audit-cybersecurity-toolkit'
    },
    {
      title: 'ESG Sustainability Platform',
      description: 'An integrated ESG and sustainability management platform for monitoring Environmental, Social, and Governance performance, assessing ESRS compliance, calculating carbon emissions, evaluating double materiality, benchmarking performance, and generating sustainability reports.',
      tags: ['ESG', 'Sustainability', 'CSRD / ESRS', 'Carbon Accounting', 'Double Materiality', 'Reporting'],
      actionLabel: 'Open ESG Sustainability Platform',
      route: '/esg-sustainability-platform'
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
