import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ChartAiService } from '../../core/services/chart-ai.service';
import { ChatMessage } from '../../models/chat-message.model';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-chart-of-accounts-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './chart-of-accounts.page.html',
  styleUrl: './chart-of-accounts.page.css'
})
export class ChartOfAccountsPageComponent {
  sending = false;
  messages: ChatMessage[] = [
    { role: 'ai', content: 'Hello. Ask me for a chart of accounts item and I will return the account number.' }
  ];

  readonly form;

  constructor(
    private readonly fb: FormBuilder,
    private readonly chartAiService: ChartAiService,
    private readonly themeService: ThemeService
  ) {
    this.form = this.fb.group({
      input: ['', [Validators.required]]
    });
  }

  get isDarkMode(): boolean {
    return this.themeService.isDark();
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  send(): void {
    if (this.form.invalid || this.sending) {
      return;
    }
    const message = this.form.controls.input.value?.trim() ?? '';
    if (!message) {
      return;
    }
    this.messages.push({ role: 'user', content: message });
    this.messages.push({ role: 'ai', content: 'AI is typing...' });
    this.form.reset();
    this.sending = true;
    this.chartAiService.sendPrompt(message).subscribe({
      next: (reply) => {
        this.messages[this.messages.length - 1] = { role: 'ai', content: reply };
        this.sending = false;
      },
      error: () => {
        this.messages[this.messages.length - 1] = {
          role: 'error',
          content: 'Error connecting to AI function. Check Supabase edge function deployment.'
        };
        this.sending = false;
      }
    });
  }
}
